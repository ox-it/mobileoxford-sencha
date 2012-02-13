Ext.define('MobileOxford.view.webcams', {
	extend: 'Ext.Panel',
    xtype: 'webcams',
    title: 'Webcams',
	requires: ['Ext.dataview.List'],
//	scrollable: 'vertical',
//	fullscreen: true,
//	layout: 'vbox',
	config: {
		title: 'Webcams',
        layout: 'fit',
        items: [
			{
				xtype: 'list',
				id: 'webcamsList',
				loadingText: 'Loading...',
				store: 'webcams',
//				layout: 'fit',
				itemTpl: '{title}',				
//				height: 500,	// TODO fix hard-coded height
			}
			]
	},
});

