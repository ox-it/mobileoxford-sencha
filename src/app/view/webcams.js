Ext.define('MobileOxford.view.webcams', {
	extend: 'Ext.Panel',
	alias: 'widget.webcams',
	title: 'Webcams',
	layout: 'vbox',
	config: {
		title: 'Webcams',
		items: [
			{
				xtype: 'toolbar',
				docked: 'top',
				title: 'Webcams',
				layout: {
					type: 'hbox',
				},
				items: [
					{
						xtype: 'button',
						text: 'Home',
						go: 'home'
					}
				]
			},
			{
				xtype: 'list',
				id: 'webcamsList',			
				store: 'webcams',
				itemTpl: '<div>{title}</div>',
				flex: 1,
				layout: 'fit',
				height: 400,
				//itemConfig: {
				//	tpl: 'AH AH AH'
				//}
			}
			]
	},
	initialize: function() {
		this.callParent();
		console.log('Webcam view loaded.');
	}
});
