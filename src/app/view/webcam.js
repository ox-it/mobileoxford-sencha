Ext.define('MobileOxford.view.webcam', {
	extend: 'Ext.Panel',
	alias: 'widget.webcam',
	title: 'Webcam',
	layout: 'vbox',
	fullscreen: true,
	config: {
		title: 'Webcam',
		items: [
			{
				xtype: 'toolbar',
				docked: 'top',
				id: 'webcamToolbar',
				title: 'Webcam',
				layout: {
					type: 'hbox',
				},
				items: [
					{
						xtype: 'button',
						text: 'Webcams',
						go: 'webcams'
					}
				]
			},
			{
				xtype: 'image',
				id: 'webcamImage',
				height: 300,
			},
			{
				xtype: 'label',
				id: 'webcamDescription',
				html: 'Description'
			},
			{
				xtype: 'label',
				id: 'webcamCredit',
				html: 'Credit',
			}
			]
	},
	initialize: function() {
		this.callParent();
		console.log('Webcam detail view loaded.');
	}
});
