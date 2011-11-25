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
				xtype: 'button',
				text: 'Go back',
				go: 'webcams',
			},
			{
				xtype: 'label',
				id: 'webcamTitle',
				html: 'Title'
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
