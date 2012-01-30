Ext.define('MobileOxford.controller.webcams', {
    extend: 'Ext.app.Controller',
    views: ['webcams', 'webcam'],
    config: {
        refs: [
	    {
		    ref: 'viewport',
		    selector: 'my-viewport'
	    },
	    {
		    ref: 'webcamsList',
		    selector: '#webcamsList'
	    },
        ],
    },

    init: function() {
        this.control({
		'#webcamsList': {
			'itemtap': function(list, index, item, evt) {
				this.getWebcamsList().deselect(index);
				var webcam = list.getStore().getAt(index);
				this.showWebcam(webcam);
			}
		},
		});
    	},

	/**
	 * AJAX call to find webcam details and generate view
	 * @param webcam webcam object
	 */
	showWebcam: function(webcam) {
		Ext.Viewport.setMask({message:"Wait!"});
		var viewport = this.getViewport();
		var url = MobileOxford.config.getEndpoint().url + 'webcams/' + webcam.get('slug') + '/';
		Ext.util.JSONP.request({
			url: url,
			callbackKey: 'callback',
			params: {
			    format: 'js',
			},
			callback: function(result) {
				if (result.eis) {
					var src = MobileOxford.config.getEndpoint().url + result.eis._url;
					var w = new Object();
					w.url = src;
					w.description = webcam.get('description');
					w.credit = webcam.get('credit');
					viewport.push({ xtype: 'webcam', title: webcam.get('title'), data: w });
				}
				else {
					alert('There was an error retrieving the webcam details.');
				}
				Ext.Viewport.setMask(false);
			}
		});
	}
})
