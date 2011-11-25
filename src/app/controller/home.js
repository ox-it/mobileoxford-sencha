Ext.define('MobileOxford.controller.home', {
    extend: 'Ext.app.Controller',
    views: ['home', 'webcams'],

    init: function() {
        console.log("init home controller");

	this.control({
		'#webcamsButton': { 'tap': function() {
					console.log("Tap called")
					Ext.Viewport.setActiveItem({xtype:'webcams'});
					console.log('Tap done');
					   }
				  },
		'#placesButton': { 'tap': function() {
						alert('Display places');
					  }
				  },
	});

        //this.callParent();
    },

	onLaunch: function() {
		console.log("Controller home, onLaunch called");

		console.log("Controller home, onLaunch done");
	},
})
