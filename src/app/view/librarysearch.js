Ext.define('MobileOxford.view.librarysearch', {
	extend: 'Ext.form.Panel',
	alias: 'widget.librarysearch',
	title: 'Library search',
	layout: 'vbox',
	fullscreen: true,
	config: {
		items: [
			{
			    xtype: 'textfield',
			    name : 'title',
			    label: 'Title'
			},
			{
			    xtype: 'textfield',
			    name : 'author',
			    label: 'Author'
			},
			{
			    xtype: 'textfield',
			    name : 'isbn',
			    label: 'ISBN'
			},
			{
				xtype: 'button',
				id: 'searchbooks',
				text: 'Search',
				ui: 'round',
				handler: function() {
					var values = this.getValues(false);	// supposed to work??
					alert('OK ' + values.title);
				}
			}
			]
	},
});
