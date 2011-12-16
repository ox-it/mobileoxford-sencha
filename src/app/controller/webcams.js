Ext.define('MobileOxford.controller.webcams', {
    extend: 'Ext.app.Controller',
    views: ['webcams', 'webcam'],

    refs: [
	{
		ref: 'viewport',
		selector: 'my-viewport'
	},
	{
		ref: 'webcamsList',
		selector: '#webcamsList'
	}
    ],

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
		var url = 'http://m.ox.ac.uk/webcams/' + webcam.get('slug') + '/';
		Ext.util.JSONP.request({
			url: url,
			callbackKey: 'callback',
			params: {
			    format: 'js',
			},
			callback: function(result) {
				if (result.eis) {
					var src = 'http://m.ox.ac.uk' + result.eis._url;
					viewport.push({ xtype: 'webcam', title: webcam.get('title') });
					
					Ext.getCmp('webcamDescription').updateHtml(webcam.get('description'));
					Ext.getCmp('webcamCredit').updateHtml(webcam.get('credit'));
					Ext.getCmp('webcamImage').setHtml("<img src=\"" + src + "\" />");	// temp ugly fix
					//Ext.getCmp('webcamImage').updateSrc(src);
				}
				else {
					alert('There was an error retrieving the webcam details.');
				}
				Ext.Viewport.setMask(false);
			}
		});	
	}
})
