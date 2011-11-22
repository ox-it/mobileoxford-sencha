Ext.define('MobileOxford.view.home', {
    extend: 'Ext.Panel',
    alias: 'widget.home',
    title: 'App list',
    layout: 'vbox',
    config: {
        items: [
                {
                    html: 'one',
                },
                {
                    html: 'two',
                },
            ],
    },
    
    initialize: function() {
        console.log('initialize home view');
        this.callParent();
    }
    
})