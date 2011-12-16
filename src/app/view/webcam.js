Ext.define('MobileOxford.view.webcam', {
	extend: 'Ext.Panel',
	alias: 'widget.webcam',
	title: 'Webcam',
	layout: 'vbox',
	fullscreen: true,
	config: {
		items: [
			{
				xtype: 'image',
				id: 'webcamImage',
				//height: '400',
			},
			{
				xtype: 'label',
				id: 'webcamDescription',
			},
			{
				xtype: 'label',
				id: 'webcamCredit',
			}
			]
	},
});
