Ext.define('MobileOxford.store.webcams', {
	extend: 'Ext.data.Store',
	requires: 'MobileOxford.model.webcam',
	model: 'MobileOxford.model.webcam',
	autoLoad: true,
	proxy: {
		type: 'jsonp',
		url: MobileOxford.config.getEndpoint().url + 'webcams/?format=js',
		callbackKey: 'callback',
		reader: {
			type: 'json',
			root: 'webcams'
		}
	}
});
