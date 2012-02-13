Ext.define('MobileOxford.controller.phone.home', {
    extend: 'MobileOxford.controller.home',

    init: function() {

        console.log('Home controller init for phones');

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
