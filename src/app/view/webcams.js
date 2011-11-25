Ext.define('MobileOxford.view.webcams', {
	extend: 'Ext.Panel',
	alias: 'widget.webcams',
	title: 'Webcams',
	layout: 'vbox',
	config: {
		title: 'Webcams',
		items: [
			{
				html: '<strong>Webcams</strong>'
			},
			{
				xtype: 'list',				
				store: 'webcams',
				itemTpl: '<div>{title}</div>',
				flex: 1,
				layout: 'fit',
				height: 400,		
				listeners: {
					itemtap: function(list, index, item, evt) {
/*
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

*/

					}
				}
			},
/*			{
				xtype: 'panel',
				id: 'xyz',
			},
			{
				xtype: 'image',
				id: 'super',
				height: 400,
				width: 400,
			}
*/
			]
	},
	initialize: function() {
		this.callParent();
		console.log('Webcam view loaded.');
	}
});
