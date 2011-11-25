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
				xtype: 'label',
				id: 'webcamTitle',
				html: 'Title'
			},
			{
				xtype: 'image',
				id: 'webcamImage',
				height: 400,
				width: 400,
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
