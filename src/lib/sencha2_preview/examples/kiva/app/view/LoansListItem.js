
Ext.define('Kiva.view.LoansListItem', {
    extend: 'Ext.dataview.DataItem',
    xtype : 'loanslistitem',
    requires: ['Ext.Img'],

    config: {
        dataMap: {
            getName: {
                setHtml: 'name'
            },

            getUse: {
                setHtml: 'use'
            },

            getAvatar: {
                setSrc: 'image'
            }
        },

        baseCls: Ext.baseCSSPrefix + 'list-item',

        name: {
            cls: 'name'
        },

        use: {
            cls: 'use'
        },

        avatar: {
            docked: 'left'
        },

        layout: {
            type: 'vbox',
            pack: 'center'
        }
    },

    applyName: function(config) {
        return Ext.factory(config, Ext.Component, this.getName());
    },

    updateName: function(newName) {
        if (newName) {
            this.add(newName);
        }
    },

    applyUse: function(config) {
        return Ext.factory(config, Ext.Component, this.getUse());
    },

    updateUse: function(newUse) {
        if (newUse) {
            this.add(newUse);
        }
    },

    applyAvatar: function(config) {
        return Ext.factory(config, Ext.Img, this.getAvatar());
    },

    updateAvatar: function(newAvatar) {
        if (newAvatar) {
            this.add(newAvatar);
        }
    }

    
});