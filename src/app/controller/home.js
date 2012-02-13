Ext.define('MobileOxford.controller.home', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            viewport: '#mainView', 
            applist: '#applist',
        },
        control: {
            applist: {
                itemtap: 'goTo',
            },
        }
    },

    goTo: function(list, index, item, evt) {
        console.log('redirect to ' + index);
        this.redirectTo(index);
    }
    
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
