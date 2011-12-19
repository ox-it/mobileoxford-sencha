Ext.define('MobileOxford.view.places', {
	extend: 'Ext.Container',
	alias: 'widget.places',
	title: 'Places',
	//layout: 'vbox',
	requires: [
		'Ext.Map'
	],
	config : {
		fullscreen: true,
		layout: 'fit',
		html: '<p>This is the Map Page</p>',
		items: [{
			xtype:  'map',
			layout: 'fit',
			useCurrentLocation: true,
			mapOptions: {
				zoom: 12
			}
		}]
	}
});

