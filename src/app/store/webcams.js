Ext.define('MobileOxford.store.webcams', {
	extend: 'Ext.data.Store',
	requires: 'MobileOxford.model.webcam',
    config: {
	    model: 'MobileOxford.model.webcam',
	    autoLoad: true,
	    proxy: {
		    type: 'jsonp',
		    //url: MobileOxford.config.getEndpoint().url + 'webcams/?format=js',
		    url: 'http://m.ox.ac.uk/webcams/?format=js',
            callbackKey: 'callback',
		    reader: {
			    type: 'json',
			    rootProperty: 'webcams'
		    }
	    }
    },
});
