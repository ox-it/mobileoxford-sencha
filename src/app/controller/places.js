Ext.define('MobileOxford.controller.places', {
    extend: 'Ext.app.Controller',
    views: ['places'],
    config: {
        refs: [
	    {
		    ref: 'viewport',
		    selector: 'my-viewport'
	    },
        ],
    }
})
