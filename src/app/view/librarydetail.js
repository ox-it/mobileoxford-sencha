Ext.define('MobileOxford.view.librarydetail', {
	extend: 'Ext.Component',
	xtype: 'librarydetail',
	title: 'Book',
	config: {
		tpl: '<div>{title}</div><div>{description}</div><div>{publisher}</div><div>{author}</div>'

	},
});
