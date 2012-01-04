Ext.define('MobileOxford.controller.podcasts', {
    extend: 'Ext.app.Controller',
    views: ['podcasts'],

    refs: [
	{
		ref: 'viewport',
		selector: 'my-viewport'
	},
    ],
/*
    init: function() {
        this.control({
		'button[go]': {
			tap: function(btn) {
				this.getViewport().push({ xtype: btn.go });
			}
		},
		});
    	},
*/
})
