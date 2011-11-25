Ext.define('MobileOxford.controller.home', {
    extend: 'Ext.app.Controller',
    views: ['home', 'webcams', 'webcam'],

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
		'#webcamsList': {
					'itemtap': function(list, index, item, evt) {
						var w = list.getStore().getAt(index);
						var url = 'http://m.ox.ac.uk/webcams/' + w.get('slug') + '/';

					    Ext.util.JSONP.request({
						url: url,
						callbackKey: 'callback',
						params: {
						    format: 'js',
						},
						callback: function(result) {
						    if (result.eis) {
							    var u = result.eis._url;
							    var src = 'http://m.ox.ac.uk' + u;
							Ext.Viewport.setActiveItem({xtype:'webcam'});
						    	Ext.getCmp('webcamTitle').updateHtml(w.get('title'));
						    	Ext.getCmp('webcamDescription').updateHtml(w.get('description'));
						    	Ext.getCmp('webcamCredit').updateHtml(w.get('credit'));
						    	Ext.getCmp('webcamImage').updateSrc(src);
						    }
						    else {
							alert('There was an error retrieving the webcam details.');
						    }
						}
					    });

					}
				}
	});

        //this.callParent();
    },

	onLaunch: function() {
		console.log("Controller home, onLaunch called");

		console.log("Controller home, onLaunch done");
	},
})
