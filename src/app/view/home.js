Ext.define('MobileOxford.view.home', {
    extend: 'Ext.Panel',
    alias: 'widget.home',
    title: 'App list',
    layout: 'vbox',
    config: {
	title: 'Homepage',
        items: [
		{
		    html: '<h2>Welcome to the future</h2>'
		},
                {
                    xtype: 'button',
		    text: 'Places',
		    id: 'placesButton'
                },
                {
                    xtype: 'button',
		    text: 'Webcams',
		    id: 'webcamsButton'
                }
            ],
    },
    
    initialize: function() {
        console.log('initialize home view');
        this.callParent();
    }
    
})
