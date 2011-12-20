Ext.define('MobileOxford.view.webcams', {
	extend: 'Ext.Panel',
	alias: 'widget.webcams',
	title: 'Webcams',
	scrollable: 'vertical',
	fullscreen: true,
	layout: 'fit',
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
				height: 500,	// TODO fix hard-coded height
			}
			]
	},
});

