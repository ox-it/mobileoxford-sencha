Ext.define('MobileOxford.view.viewport', {
	extend: 'Ext.TabPanel',
	config: {
		fullscreen: true,
		tabBarPosition: 'bottom',
		items: [
			{
				xtype: 'home'
			},
			{
				xtype: 'webcams',
				id: 'webcamsView'
			}
		]
	}
});
