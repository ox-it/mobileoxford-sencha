Ext.define('MobileOxford.view.webcams', {
	extend: 'Ext.Panel',
	alias: 'widget.webcams',
	title: 'Webcams',
	scroll: 'vertical',
	fullscreen: true,
	config: {
		title: 'Webcams',
		items: [
			{
				xtype: 'list',
				id: 'webcamsList',
				loadingText: 'Loading...',
				store: 'webcams',
				layout: 'fit',
				itemTpl: '{title}',				
				height: 400,	// TODO fix hard-coded height
			}
			]
	},
});

