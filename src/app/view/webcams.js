Ext.define('MobileOxford.view.webcams', {
	extend: 'Ext.Panel',
	alias: 'widget.webcams',
	title: 'Webcams',
	layout: 'vbox',
	config: {
		title: 'Webcams',
		items: [
			{
				xtype: 'toolbar',
				docked: 'top',
				title: 'Webcams',
				layout: {
					type: 'hbox',
				},
				items: [
					{
						xtype: 'button',
						text: 'Home',
						go: 'home'
					}
				]
			},
			{
				xtype: 'list',
				//xtype: 'componentview',
				id: 'webcamsList',			
				store: 'webcams',
				itemTpl: '<div>{title}</div>',
				flex: 1,
				layout: 'fit',
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
		var myMask = new Ext.LoadMask(Ext.getBody(), {msg:"Wait!", store: 'webcams'});
		myMask.show();
		// NOTE about "myMask":
		// * this is fired when application start because this view is init when application start (good thing?)
		// * it is automatically hidden when store is ready (because bound to store)
		console.log('Webcam view loaded.');
	}
});

