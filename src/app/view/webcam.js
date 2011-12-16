Ext.define('MobileOxford.view.webcam', {
	extend: 'Ext.Component',
	xtype: 'webcam',
	title: 'Webcam',
	config: {
		tpl: '<div><img height="90%" src="{url}" /></div><div>{description}</div><div>{credit}</div>'

	},
});
