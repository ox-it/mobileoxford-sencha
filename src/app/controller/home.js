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
		'#webcamsList': {
					'itemtap': function(list, index, item, evt) {
						var w = list.getStore().getAt(index);
						Ext.getCmp('xyz').setHtml(w.get('description'));
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
						    }
						    else {
							alert('There was an error retrieving the webcam details.');
						    }
						    
						    Ext.getCmp('super').updateSrc(src);
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
