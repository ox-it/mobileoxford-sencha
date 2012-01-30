Ext.define('MobileOxford.view.home', {
    extend: 'Ext.Panel',
    alias: 'widget.home',
    xtype: 'home',
    title: 'Mobile Oxford',
    requires: ['Ext.Button'],
    layout: 'vbox',
    config: {
        padding: 10,
	    items: [
               	{
                    xtype: 'button',
		            text: 'Places',
		            go: 'places',
                },
                {
                    xtype: 'button',
		            text: 'Webcams',
		            go: 'webcams',
                },
                {
                    xtype: 'button',
		            text: 'Library search',
		            go: 'librarysearch',
                },
                {
                    xtype: 'button',
		            text: 'Podcasts',
		            go: 'podcasts',
                }
            ],
    },
    
})
