Ext.define('MobileOxford.view.webcams', {
	extend: 'Ext.Panel',
	alias: 'widget.webcams',
	title: 'Webcams',
	layout: 'vbox',
	config: {
		title: 'Webcams',
		items: [
			{
				html: '<strong>Webcams</strong>'
			},
			{
				xtype: 'dataview',
				store: 'webcams',
				itemTpl: '<div>{title}</div>',
				layout: 'fit',
				height: 400,
				width: 400,			
				//fullscreen: true,
			},
			{
				html: 'Under the list of webcams'
			}
			]
	},
	initialize: function() {
		this.callParent();
		console.log('Webcam view loaded.');
	}
});
