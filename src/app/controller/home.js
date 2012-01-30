Ext.define('MobileOxford.controller.home', {
    extend: 'Ext.app.Controller',
    views: ['home'],
    config: {
        refs: [
	    {
		    ref: 'viewport',
		    selector: 'my-viewport'
	    },
        ],
    },

    init: function() {
        this.control({
		'button[go]': {
/* look for any button with the "go" parameter and setActiveItem() to that value, so you just have to tell the button to go to the xtype of your view; http://stackoverflow.com/questions/8065505/sencha-touch-2-0-cant-set-activeitem-on-viewport
*/
			tap: function(btn) {
				this.getViewport().push({ xtype: btn.go });
			}
		},
		});
    	},
})
