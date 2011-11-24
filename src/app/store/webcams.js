Ext.define('MobileOxford.store.webcams', {
	extend: 'Ext.data.Store',
	requires: 'MobileOxford.model.webcam',
	model: 'MobileOxford.model.webcam',
	autoLoad: true,
	proxy: {
		type: 'jsonp',
		url: 'http://m.ox.ac.uk/webcams/?format=js',
		callbackKey: 'callback',
		reader: {
			type: 'json',
			root: 'webcams'
		}
	}
});
