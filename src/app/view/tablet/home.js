Ext.define('MobileOxford.view.tablet.home', {
    //extend: 'Ext.Container',
    extend: 'Ext.navigation.View',
    xtype: 'mainview',
    config: {
        fullscreen: true,
        layout: {
            type: 'card',
            animation: {
                type: 'slide',
                direction: 'left',
                duration: 250,
            }
        },
        navigationBar: {
            items: [
                {
                    xtype: 'button',
                    id: 'favMenu',
                    align: 'right',
                    text: 'Favorites',
                },
            ]
        },
        items: [
            {
                id: 'content',
                html: '<div>Select an application on the right to begin...</div>'
            },
            {
                id: 'mainMenu',
                xtype: 'mainmenu',
                width: 250,
                docked: 'left',
            },
        ],
    }
});

/*
Ext.define('MobileOxford.view.tablet.home', {
    extend: 'MobileOxford.view.home', 
    xtype: 'home',
    config: {
        layout: {
            type: 'card',
            animation: {
                type: 'slide',
                direction: 'left',
                duration: 250
            }
        },
        fullscreen: true,
        items: [
            {
                xtype: 'list',
                id: 'applist',
                items: [ 
               	{
                    xtype: 'button',
		            text: 'Places',
		            go: 'places',
                },
                {
                    //xtype: 'button',
		            text: 'Webcams',
		            go: 'webcams',
                },
                {
                    //xtype: 'button',
		            text: 'Library search',
		            go: 'librarysearch',
                },
               {
                    xtype: 'button',
		            text: 'Podcasts',
		            go: 'podcasts',
                }
                ],
            }
            ]
    },
    launch: function() {
        console.log('home tablet launch');
    }
})*/
