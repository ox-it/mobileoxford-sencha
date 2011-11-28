Ext.define('MobileOxford.view.home', {
    extend: 'Ext.Panel',
    alias: 'widget.home',
    title: 'App list',
    layout: 'vbox',
    config: {
	title: 'Homepage',
        items: [
		{
			xtype: 'toolbar',
			docked: 'top',
			title: 'Mobile Oxford',
			layout: {
				type: 'hbox',
			},
		},
                {
                    xtype: 'button',
		    text: 'Places',
		    id: 'placesButton'
                },
                {
                    xtype: 'button',
		    text: 'Webcams',
		    id: 'webcamsButton',
		    go: 'webcams',
                }
            ],
    },
    
    initialize: function() {
        console.log('initialize home view');
        this.callParent();
    }
    
})
