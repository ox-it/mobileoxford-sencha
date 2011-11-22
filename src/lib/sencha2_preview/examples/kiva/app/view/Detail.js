/**
 * @class kiva.views.LoanInfo
 * @extends Ext.Sheet
 *
 * We use this Ext.Sheet subclass to display information about a particular Loan when the user has tapped on it.
 * Ext.Sheet is an overlay class that slides in from above, below or one of the sides, usually in response to a
 * user action such as tapping on a list item.
 *
 * In this class we set the sheet up to be modal (masks the rest of the page) and to enter and exit from the
 * right hand edge of the screen. It hides itself when the user taps on the modal mask (via the hideOnMaskTap config).
 *
 * Inside the class we have an Ext.Carousel with three cards - details, payments and map. Each card is set up
 * inside its own function to make it easy to see what is going on. The LoanInfo sheet is rendered and shown by
 * the loan controller's 'show' action (see app/controllers/loans.js).
 *
 */
Ext.define('Kiva.view.Detail', {
    extend: 'Ext.Sheet',
    xtype: 'detail',

    requires: [
        'Kiva.view.detail.Information',
        'Kiva.view.detail.Schedule'
        // 'Kiva.view.detail.Map'
    ],

    config: {
        modal: true,
        centered : false,
        hideOnMaskTap : true,

        ui: 'detail',

        // we always want the sheet to be 400px wide and to be as tall as the device allows
        width: 400,
        top: 0,
        bottom: 0,
        right: 0,

        loan: null,

        layout: {
            type: 'vbox',
            align: 'stretch'
        },

        items: [
            {
                xtype: 'carousel',
                flex: 1,
                items: [
                    { xtype: 'detailInformation' },
                    { xtype: 'detailSchedule' }
                    // { xtype: 'detailMap' }
                ]
            },
            {
                xtype: 'button',
                text: 'Lend $25'
            }
        ]
    },

    animationDuration: 300,

    show: function(animation) {
        this.callParent();

        Ext.Animator.run([{
            element  : this.element,
            xclass   : 'Ext.fx.animation.SlideIn',
            direction: Ext.os.deviceType == "Phone" ? "up" : "left",
            duration : this.animationDuration
        }, {
            element : 'ext-mask-1',
            xclass  : 'Ext.fx.animation.FadeIn',
            duration: this.animationDuration
        }]);
    },

    hide: function(animation) {
        var me = this,
            mask = Ext.getCmp('ext-mask-1');

        //we fire this event so the controller can deselect all items immediately.
        this.fireEvent('hideanimationstart', this);

        //show the mask element so we can animation it out (it is already shown at this point)
        mask.show();

        Ext.Animator.run([{
            element  : me.element,
            xclass   : 'Ext.fx.animation.SlideOut',
            duration : this.animationDuration,
            preserveEndState: false,
            direction: Ext.os.deviceType == "Phone" ? "down" : "right",
            onEnd: function() {
                me.setHidden(true);
                mask.setHidden(true);
            }
        }, {
            element : 'ext-mask-1',
            xclass  : 'Ext.fx.animation.FadeOut',
            duration: this.animationDuration
        }]);
    },

    initialize: function() {
        this.on({
            scope: this,

            hiddenchange: this.onHiddenChange
        });
    },

    onHiddenChange: function(me, hidden) {
        if (!hidden) {
            var carousel = this.down('carousel');
            carousel.setActiveItem(0);
        }
    },

    updateLoan: function(newLoan) {
        var information = this.down('detailInformation'),
            payments = this.down('detailSchedule');

        information.setData(newLoan.data);
        payments.setData(newLoan.data.terms.scheduled_payments);

        //update the lend button
        this.updateLendButton();
    },

    updateLendButton: function() {
        var url    = "http://www.kiva.org/lend/" + this.getLoan().getId(),
            button = this.down('button'),
            link = Ext.getDom('linker'),
            clickEvent = document.createEvent('Event');
        
        //http://www.sencha.com/forum/showthread.php?130358-window.open()-from-toolbar-button-opens-window-from-list-item-a-new-tab&p=639938#post639938
        clickEvent.initEvent('click', true, false);

        button.setHandler(function() {
            link.href = url;
            link.dispatchEvent(clickEvent);
        });
    }

    // /**
    //  * Here we just set up the items that will go in the carousel and add a button to make it easy for the
    //  * user to lend money to the loanee.
    //  */
    // initComponent: function() {
    //     Ext.apply(this, {
    //         items: {
    //             xtype: 'carousel',
    //             items: [
    //                 this.getDetailsCard(),
    //                 this.getPaymentsCard(),
    //                 this.getMapCard()
    //             ]
    //         },

    //         dockedItems: {
    //             xtype: 'button',
    //             text: 'Lend $25',
    //             ui: 'action',
    //             dock: 'bottom'
    //         }
    //     });

    //     kiva.views.LoanInfo.superclass.initComponent.apply(this, arguments);
    // },

    // /**
    //  * Sets the Loan instance to be displayed in the cards. If this component has already been rendered,
    //  * the cards are updated immediately, otherwise they will be updated when the component is rendered
    //  * @param {Ext.data.Model} loan The Loan instance
    //  */
    // setLoan: function(loan) {
    //     /**
    //      * @property instance
    //      * @type Ext.data.Model
    //      * The currently loaded Loan instance
    //      */
    //     this.instance = loan;

    //     if (this.rendered) {
    //         this.updateCards();
    //     } else {
    //         this.on('show', this.updateCards, this);
    //     }
    // },

    // /**
    //  * Returns an Ext.Component that displays details about the given loan
    //  * @return {Ext.Component} The details component
    //  */
    // getDetailsCard: function() {
    //     return new Ext.Component({
    //         tpl: new Ext.XTemplate(
    //             '<h1>{name}</h1>',
    //             '<h2>{location.town}, {location.country}</h2>',
    //             '<p class="overview">',
    //                 '<strong>Activity:</strong> {activity}<br />',
    //                 '<strong>Sector:</strong> {sector}<br />',
    //                 '<strong>Amount requested:</strong> ${terms.loan_amount}<br />',
    //                 '<strong>Amount funded:</strong> ${funded_amount}<br />',
    //             '</p>',
    //             '<p><strong>Overview</strong><br />{description.texts.en}</p>',
    //             {compiled: true}
    //         ),

    //         itemId: 'detailsCard',
    //         scroll: 'vertical',
    //         styleHtmlContent: true,
    //         html: '',
    //         listeners : {
    //             activate : function() {
    //                 if (this.scroller) {
    //                     this.scroller.scrollTo({x:0, y:0});
    //                 }
    //             }
    //         }
    //     });
    // },

    // /**
    //  * Returns an Ext.Component that displays the payment schedule for the given loan
    //  * @return {Ext.Component} The payments component
    //  */
    // getPaymentsCard: function() {
    //     return new Ext.Component({
    //         html: '',
    //         scroll: 'vertical',
    //         styleHtmlContent: true,
    //         itemId: 'paymentsCard',

    //         tpl: new Ext.XTemplate(
    //             '<h1>Repayment Schedule</h1>',
    //             '<tpl for=".">',
    //                 '<div class="payment">',
    //                     '<div>{[this.formatDueDate(values.due_date)]} <span>${amount}</span></div>',
    //                 '</div>',
    //             '</tpl>',
    //             {
    //                 compiled: true,

    //                 /**
    //                  * Takes a date timestamp and formats it nicely for display
    //                  * @param {String} date The data string
    //                  * @return {String} The formatted date string
    //                  */
    //                 formatDueDate: function(date) {
    //                     var format = "j M Y",
    //                         parsed = Date.parseDate(date, 'c');

    //                     return Ext.util.Format.date(parsed, format);
    //                 }
    //             }
    //         ),

    //         listeners : {
    //             activate : function() {
    //                 if (this.scroller) {
    //                     this.scroller.scrollTo({x:0, y:0});
    //                 }
    //             }
    //         }
    //     });
    // },

    // /**
    //  * Returns an Ext.Map centered on the location of the Loanee
    //  * @return {Ext.Map} The map component
    //  */
    // getMapCard: function() {
    //     return new Ext.Map({
    //         itemId: 'mapCard',
    //         maskMap: true,

    //         mapOptions: {
    //             center: this.mapPosition,
    //             disableDefaultUI: true,
    //             zoom: 5
    //         },

    //         listeners : {
    //             activate : function() {
    //                 if (this.marker) {
    //                     this.update(this.marker.position);
    //                 }
    //             },
    //             resize : function() {
    //                 if (this.marker) {
    //                     this.update(this.marker.position);
    //                 }
    //             }
    //         }
    //     });
    // },

    // /**
    //  * @private
    //  * This is used internally by the component to update the contents of each card.
    //  */
    // updateCards: function() {
    //     var detailsCard  = this.down("#detailsCard"),
    //         paymentsCard = this.down("#paymentsCard"),
    //         mapCard      = this.down("#mapCard"),
    //         loan         = this.instance,
    //         coords       = loan.get('location').geo.pairs.split(' ').map(parseFloat);

    //     //updates the text in the first two cards
    //     detailsCard.update(loan.data);
    //     paymentsCard.update(loan.data.terms.scheduled_payments);

    //     //if we already had an old marker, remove it now
    //     if (this.mapMarker) {
    //         this.mapMarker.setMap(null);
    //         delete this.mapMarker;
    //     }

    //     //add a marker for the Loanee's position on the map
    //     this.mapMarker = new google.maps.Marker({
    //         map: mapCard.map,
    //         title : loan.get('name'),
    //         position: new google.maps.LatLng(coords[0], coords[1])
    //     });

    //     mapCard.update(this.mapMarker.position);

    //     //finally, update the link tied to the Lend $25 button
    //     var url    = "http://www.kiva.org/lend/" + this.instance.getId(),
    //         text   = Ext.util.Format.format('<a href="{0}" target="_blank">Lend $25</a>', url),
    //         button = this.getDockedItems()[0];

    //     button.setText(text);
    // }
});
