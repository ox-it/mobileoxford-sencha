Ext.define('MobileOxford.view.webcams', {
	extend: 'Ext.Panel',
	alias: 'widget.webcams',
	title: 'Webcams',
	layout: 'vbox',
	config: {
		title: 'Webcams',
		items: [
			{
				xtype: 'list',
				//xtype: 'componentview',
				id: 'webcamsList',			
				store: 'webcams',
				itemTpl: '{title}',
				flex: 1,
				layout: 'fit',
				//allowDeselect: true,
				//layout: {
				//	type: 'vbox',
				//	align: 'middle',
				//},				
				height: 400,	// TODO fix hard-coded height
				//itemConfig: {
				//	tpl: '{title}',
				//	xtype: 'button'
				//}
			}
			]
	},
	initialize: function() {
		this.callParent();
		//var myMask = new Ext.LoadMask(Ext.getBody(), {message:"Wait!", store: 'webcams'});
		//myMask.show();
		// NOTE about "myMask":
		// * this is fired when application start because this view is init when application start (good thing?)
		// * it is automatically hidden when store is ready (because bound to store)
		//console.log('Webcam view loaded.');
		//Ext.Viewport.setMask({message:"Wait!"});
		
	}
});

