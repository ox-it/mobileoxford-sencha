Ext.define('MobileOxford.view.phone.home', {
    extend: 'MobileOxford.view.home', 
    config: {
        fullscreen: true,
        layout: 'card',
        items: [{
            xtype: 'list',
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
        }]
    },
})
