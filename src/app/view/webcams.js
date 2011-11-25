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
				xtype: 'list',
				id: 'webcamsList',			
				store: 'webcams',
				itemTpl: '<div>{title}</div>',
				flex: 1,
				layout: 'fit',
				height: 400,
			},
			{
				xtype: 'panel',
				id: 'xyz',
			},
			{
				xtype: 'image',
				id: 'super',
				height: 400,
				width: 400,
			}

			]
	},
	initialize: function() {
		this.callParent();
		console.log('Webcam view loaded.');
	}
});
