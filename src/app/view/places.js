Ext.define('MobileOxford.view.places', {
	extend: 'Ext.Panel',
	alias: 'widget.places',
	title: 'Places',
	layout: 'vbox',
	config: {
		items: [
			{
				xtype: 'map',
				useCurrentLocation:true
			}
			]
	},
});

