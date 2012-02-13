/*
The Viewport class in ST2 will always be there and if you specify something with fullscreen as true, it will be added as an item to the Viewport singleton.

http://www.sencha.com/forum/showthread.php?150668-ExtJS4-to-ST2
*/

Ext.define('MobileOxford.view.Viewport', {
	extend: 'Ext.NavigationView',
	xtype: 'my-viewport',
//	requires: ['Ext.Toolbar','MobileOxford.view.home'],
	config: {
		layout: {
            type: 'card',
            animation: {
                type: 'slide',
                direction: 'left',
                duration: '250',
            },
        },
		fullscreen: true,
		items: [
			{
				xtype: 'toolbar',
				docked: 'bottom',
				title: 'O:' + navigator.onLine + " W:" + Ext.os.deviceType,
				/*items: [
					{
						text: 'Menu',
						handler: function() {
							var overlay = Ext.create('MobileOxford.view.home', {
							    floating        : true,
							    modal           : true,
							    hidden          : true,
							    height          : 300,
							    width           : '50%',
							    scrollable      : true,
							});
							overlay.show();
						}
					}
				]*/
			},
			{
				xtype: 'home'
			},
		],
    },
});
