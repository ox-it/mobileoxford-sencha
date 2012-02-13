Ext.define('MobileOxford.controller.webcams', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            viewport: 'mainview',
            menu: '#mainMenu',
            //viewport: 'my-viewport',
            webcamsList: '#webcamsList',
        },
        control: {
            webcamsList: {
                itemtap: 'redirectToWebcam',
            },
        },
        routes: {
            'webcams': 'showWebcams',
            'webcams/:webcam': 'showWebcam'
        },
        before: {
            showWebcams: 'loadWebcams',
        }
    },

    showWebcams: function() {
        console.log('showWebcams');
        //this.getViewport().push({ xtype: 'webcams' });
        this.getMenu().add({ xtype: 'webcams' });
    },

    loadWebcams: function(action) {
        action.resume();
    },

    redirectToWebcam: function(list, index, item, evt) {
        var webcam = list.getStore().getAt(index);
        var slug = webcam.get('slug');
        console.log('redirectToWebcam ' + slug);
        this.redirectTo('webcams/' + slug);
    },

    showWebcam: function(webcam) {
        console.log('showWebcam ' + webcam);
        Ext.Viewport.setMasked({ message: "Wait!", xtype: 'loadmask'});
		var url = 'http://m.ox.ac.uk/webcams/' + webcam + '/';
        Ext.data.JsonP.request({
            url: url,
			callbackKey: 'callback',
			params: {
			    format: 'js',
			},
            timeout: 5000,
            success: this.onWebcamSuccess,
            failure: this.onWebcamFailure,
			scope: this,
		});
	},

    onWebcamSuccess: function(result) {
        // TODO refactor method name vs showing webcam
        console.log('onWebcamSuccess');
        if(result.eis) {
            var src = 'http://m.ox.ac.uk' + result.eis._url;
            var w = new Object();
            w.url = src;
            w.description = result.description;
            w.credit = result.credit;
            this.getViewport().push({ xtype: 'webcam', title: result.title, data: w});
            Ext.Viewport.setMasked(false);
        } else {
            this.onWebcamFailure(result);
        }
    },

    onWebcamFailure: function(result) {
        alert('Sorry, an error has occured while retrieving webcam\'s details.');
        this.redirectTo('webcams');
        Ext.Viewport.setMasked(false);
    },
})
