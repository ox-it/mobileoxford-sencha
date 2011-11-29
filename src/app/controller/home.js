Ext.define('MobileOxford.controller.home', {
    extend: 'Ext.app.Controller',
    views: ['home', 'webcams', 'webcam'],

    init: function() {
        console.log("init home controller");

	this.control({
		'button[go]': {
/* look for any button with the "go" parameter and setActiveItem() to that value, so you just have to tell the button to go to the xtype of your view; http://stackoverflow.com/questions/8065505/sencha-touch-2-0-cant-set-activeitem-on-viewport
*/
			tap: function(btn) {
				viewport = Ext.ComponentQuery.query('my-viewport');
				target = Ext.ComponentQuery.query(btn.go);
				viewport[githu0].setActiveItem(target[0]);
				console.log('Going to ' + btn.go);
			}
		},
		'#placesButton': { 
			'tap': function() {
				alert('TODO');
			}
		},
		'#webcamsList': {
			'itemtap': function(list, index, item, evt) {
				var myMask = new Ext.LoadMask(Ext.getBody(), {msg:"Wait!"});
				myMask.show();
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
							var src = 'http://m.ox.ac.uk' + result.eis._url;
							viewport = Ext.ComponentQuery.query('my-viewport');
							target = Ext.ComponentQuery.query('webcam');
							viewport[0].setActiveItem(target[0]);
							var toolbar = Ext.getCmp('webcamToolbar');
							toolbar.setTitle(w.get('title'));
							Ext.getCmp('webcamDescription').updateHtml(w.get('description'));
							Ext.getCmp('webcamCredit').updateHtml(w.get('credit'));
							Ext.getCmp('webcamImage').updateSrc(src);
						}
							else {
								alert('There was an error retrieving the webcam details.');
							}
							myMask.hide();
						}
					});
				}
			}
		});
    	},

	onLaunch: function() {
		console.log("Controller home, onLaunch called");
	},
})
