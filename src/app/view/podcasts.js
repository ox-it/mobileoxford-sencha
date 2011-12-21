Ext.define('MobileOxford.view.podcasts', {
	extend: 'Ext.Panel',
	alias: 'widget.podcasts',
	title: 'Podcasts',
	scrollable: 'vertical',
	fullscreen: true,
	layout: 'fit',
	config: {
		title: 'Podcasts',
		items: [
			{
				xtype: 'video',
				url: 'http://media.podcasts.ox.ac.uk/philfac/general_philosophy/8_4_millican.mp4?CAMEFROM=moxacuk'
			}
			]
	},
});

