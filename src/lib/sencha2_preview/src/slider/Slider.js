/**
 * Utility class used by Ext.field.Slider.
 * @private
 */
Ext.define('Ext.slider.Slider', {
    extend: 'Ext.Container',
    xtype: 'slider',

    requires: [
        'Ext.util.SizeMonitor',
        'Ext.slider.Thumb',
        'Ext.fx.easing.EaseOut'
    ],

    /**
    * @event change
    * Fires when the value changes
    * @param {Ext.field.Slider} me
    * @param {Array} value
    */

    config: {
        baseCls: 'x-slider',

        /**
         * @cfg {Object} thumbConfig The config object to factory {@link Ext.slider.Thumb} instances
         * @accessor
         */
        thumbConfig: {
            draggable: {
                translatable: {
                    easingX: {
                        duration: 300,
                        type: 'ease-out'
                    }
                }
            }
        },

        /**
         * @cfg {Number/Number[]} value The value(s) of this slider's thumbs. If you pass
         * a number, it will assume you have just 1 thumb.
         * @accessor
         */
        value: 0,

        /**
         * @cfg {Number/Number[]} values Alias to {@link #value}
         * @accessor
         */
        values: 0,

        /**
         * @cfg {Number} tabIndex
         * @hide
         * @accessor
         */
        tabIndex: -1,

        /**
         * @cfg {Number} minValue The lowest value any thumb on this slider can be set to.
         * @accessor
         */
        minValue: 0,

        /**
         * @cfg {Number} maxValue The highest value any thumb on this slider can be set to.
         * @accessor
         */
        maxValue: 100,

        /**
         * @cfg {Number} increment The increment by which to snap each thumb when its value changes. Defaults to 1. Any thumb movement
         * will be snapped to the nearest value that is a multiple of the increment (e.g. if increment is 10 and the user
         * tries to move the thumb to 67, it will be snapped to 70 instead)
         * @accessor
         */
        increment: 1,

        /**
         * @cfg {Boolean} allowThumbsOverlapping Whether or not to allow multiple thumbs to overlap each other.
         * Setting this to true guarantees the ability to select every possible value in between {@link #minValue}
         * and {@link #maxValue} that satisfies {@link #increment}
         * @accessor
         */
        allowThumbsOverlapping: false,

        /**
         * @cfg {Boolean/Object} animation
         * @accessor
         */
        animation: true
    },

    elementWidth: 0,

    offsetValueRatio: 0,

    activeThumb: null,

    // @private
    initialize: function() {
        var element = this.element;

        this.callParent();

        element.on({
            scope: this,
            tap: 'onTap'
        });

        this.on({
            scope: this,
            delegate: '> thumb',
            dragstart: 'onThumbDragStart',
            drag: 'onThumbDrag',
            dragend: 'onThumbDragEnd'
        });

        this.on('painted', 'onPainted');

        this.sizeMonitor = new Ext.util.SizeMonitor({
            element: element,
            callback: this.onSizeChange,
            scope: this
        });
    },

    onPainted: function() {
        this.sizeMonitor.refresh();
        this.refreshElementWidth();
        this.refreshValue();
    },

    onSizeChange: function() {
        this.refreshElementWidth();
        this.refreshValue();
    },

    /**
     * @private
     */
    factoryThumb: function() {
        return Ext.factory(this.getThumbConfig(), Ext.slider.Thumb);
    },

    /**
     * @private
     */
    getThumbs: function() {
        return this.innerItems;
    },

    /**
     * @private
     */
    getThumb: function(index) {
        if (typeof index != 'number') {
            index = 0;
        }

        return this.innerItems[index];
    },

    refreshOffsetValueRatio: function() {
        var valueRange = this.getMaxValue() - this.getMinValue(),
            trackWidth = this.elementWidth - this.thumbWidth;

        this.offsetValueRatio = trackWidth / valueRange;
    },

    refreshElementWidth: function() {
        this.elementWidth = this.element.dom.offsetWidth;
        this.thumbWidth = this.getThumb(0).getElementWidth();
    },

    setActiveThumb: function(thumb) {
        var oldActiveThumb = this.activeThumb;

        if (oldActiveThumb && oldActiveThumb !== thumb) {
            oldActiveThumb.setZIndex(null);
        }

        this.activeThumb = thumb;
        thumb.setZIndex(2);

        return this;
    },

    onThumbDragStart: function(thumb, e) {
        if (e.absDeltaX <= e.absDeltaY) {
            return false;
        }
        else {
            e.stopPropagation();
        }

        if (this.getAllowThumbsOverlapping()) {
            this.setActiveThumb(thumb);
        }
    },

    onThumbDrag: function(thumb, e, offset) {
        var index = this.getThumbIndex(thumb),
            offsetX = offset.x,
            offsetValueRatio = this.offsetValueRatio,
            constrainedValue = this.constrainValue(offsetX / offsetValueRatio);

        e.stopPropagation();

        this.setIndexValue(index, constrainedValue);
        this.fireChangeEvent();

        return false;
    },

    setIndexValue: function(index, value, animation) {
        var thumb = this.getThumb(index),
            values = this.getValue(),
            offsetValueRatio = this.offsetValueRatio,
            draggable = thumb.getDraggable();

        draggable.setOffset({
            x: value * offsetValueRatio
        }, animation);

        values[index] = this.constrainValue(draggable.getOffset().x / offsetValueRatio);
    },

    onThumbDragEnd: function(thumb) {
        this.refreshThumbConstraints(thumb);
    },

    getThumbIndex: function(thumb) {
        return this.getThumbs().indexOf(thumb);
    },

    refreshThumbConstraints: function(thumb) {
        var allowThumbsOverlapping = this.getAllowThumbsOverlapping(),
            offsetX = thumb.getDraggable().getOffset().x,
            thumbs = this.getThumbs(),
            index = this.getThumbIndex(thumb),
            previousThumb = thumbs[index - 1],
            nextThumb = thumbs[index + 1],
            thumbWidth = this.thumbWidth;

        if (previousThumb) {
            previousThumb.getDraggable().addExtraConstraint({
                max: {
                    x: offsetX - ((allowThumbsOverlapping) ? 0 : thumbWidth)
                }
            });
        }

        if (nextThumb) {
            nextThumb.getDraggable().addExtraConstraint({
                min: {
                    x: offsetX + ((allowThumbsOverlapping) ? 0 : thumbWidth)
                }
            });
        }
    },

    // @private
    onTap: function(e) {
        var targetElement = Ext.get(e.target);

        if (!targetElement || targetElement.hasCls('x-thumb')) {
            return;
        }

        var touchPointX = e.touch.point.x,
            element = this.element,
            elementX = element.getX(),
            offset = touchPointX - elementX - (this.thumbWidth / 2),
            value = this.constrainValue(offset / this.offsetValueRatio),
            values = this.getValue(),
            minDistance = Infinity,
            ln = values.length,
            i, absDistance, testValue, closestIndex;

        if (ln === 1) {
            closestIndex = 0;
        }
        else {
            for (i = 0; i < ln; i++) {
                testValue = values[i];
                absDistance = Math.abs(testValue - value);

                if (absDistance < minDistance) {
                    minDistance = absDistance;
                    closestIndex = i;
                }
            }
        }

        this.setIndexValue(closestIndex, value, this.getAnimation());
        this.refreshThumbConstraints(this.getThumb(closestIndex));
        this.fireChangeEvent();
    },

    // @private
    updateThumbs: function(newThumbs) {
        this.add(newThumbs);
    },

    applyValue: function(value) {
        var values = Ext.Array.from(value),
            filteredValues = [],
            previousFilteredValue = this.getMinValue(),
            filteredValue, i, ln;

        for (i = 0,ln = values.length; i < ln; i++) {
            filteredValue = this.constrainValue(values[i]);

            if (filteredValue < previousFilteredValue) {
                //<debug warn>
                Ext.Logger.warn("Invalid values of '"+Ext.encode(values)+"', values at smaller indexes must be smaller than or equal to values at greater indexes");
                //</debug>
                filteredValue = previousFilteredValue;
            }

            filteredValues.push(filteredValue);

            previousFilteredValue = filteredValue;
        }

        return filteredValues;
    },

    /**
     * Updates the sliders thumbs with their new value(s)
     */
    updateValue: function(value) {
        var thumbs = this.getThumbs(),
            ln = value.length,
            i;

        this.setThumbsCount(ln);

        for (i = 0; i < ln; i++) {
            thumbs[i].getDraggable().setExtraConstraint(null)
                                    .setOffset({ x: value[i] * this.offsetValueRatio });
        }

        for (i = 0; i < ln; i++) {
            this.refreshThumbConstraints(thumbs[i]);
        }

        this.fireChangeEvent();
    },

    /**
     * @private
     */
    refreshValue: function() {
        this.refreshOffsetValueRatio();

        this.setValue(this.getValue());
    },

    /**
     * @private
     * Takes a desired value of a thumb and returns the nearest snap value. e.g if minValue = 0, maxValue = 100, increment = 10 and we
     * pass a value of 67 here, the returned value will be 70. The returned number is constrained within {@link minValue} and {@link maxValue},
     * so in the above example 68 would be returned if {@link maxValue} was set to 68.
     * @param {Number} value The value to snap
     * @return {Number} The snapped value
     */
    constrainValue: function(value) {
        var me = this,
            minValue  = me.getMinValue(),
            maxValue  = me.getMaxValue(),
            increment = me.getIncrement(),
            remainder;

        value = parseFloat(value);

        if (isNaN(value)) {
            value = minValue;
        }

        remainder = value % increment;
        value -= remainder;

        if (Math.abs(remainder) >= (increment / 2)) {
            value += (remainder > 0) ? increment : -increment;
        }

        value = Math.max(minValue, value);
        value = Math.min(maxValue, value);

        return value;
    },

    setThumbsCount: function(count) {
        var thumbs = this.getThumbs(),
            thumbsCount = thumbs.length,
            i, ln, thumb;

        if (thumbsCount > count) {
            for (i = 0,ln = thumbsCount - count; i < ln; i++) {
                thumb = thumbs[thumbs.length - 1];
                thumb.destroy();
            }
        }
        else if (thumbsCount < count) {
            for (i = 0,ln = count - thumbsCount; i < ln; i++) {
                this.add(this.factoryThumb());
            }
        }

        return this;
    },

    fireChangeEvent: function() {
        this.fireEvent('change', this, this.getValue());
    },

    /**
     * Convience method. Calls {@link #setValue}
     */
    setValues: function(value) {
        this.setValue(value);
    },

    /**
     * Convience method. Calls {@link #getValue}
     */
    getValues: function() {
        return this.getValue();
    },

    // Sets the {@link #increment} configuration
    applyIncrement: function(increment) {
        if (increment === 0) {
            increment = 1;
        }

        return Math.abs(increment);
    },

    // @private
    updateAllowThumbsOverlapping: function(newValue, oldValue) {
        if (typeof oldValue != 'undefined') {
            this.refreshValue();
        }
    },

    // @private
    updateMinValue: function(newValue, oldValue) {
        if (typeof oldValue != 'undefined') {
            this.refreshValue();
        }
    },

    // @private
    updateMaxValue: function(newValue, oldValue) {
        if (typeof oldValue != 'undefined') {
            this.refreshValue();
        }
    },

    // @private
    updateIncrement: function(newValue, oldValue) {
        if (typeof oldValue != 'undefined') {
            this.refreshValue();
        }
    }
});
