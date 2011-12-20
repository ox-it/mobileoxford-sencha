Ext.define('MobileOxford.view.librarysearch', {
	extend: 'Ext.form.Panel',
	alias: 'widget.librarysearch',
	title: 'Library search',
	//layout: 'vbox',
	scrollable: 'vertical',	// TODO check why we can still scroll
	fullscreen: true,
	config: {
		items: [
		    {
		        xtype: 'fieldset',
			title: 'Search for books',
		        instructions: 'Search the library by either some subset of title and author, or by ISBN. You may use a \'*\' in place of an \'X\' in an ISBN.',
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
					id: 'btn-search',
					text: 'Search',
					ui: 'round',
				}
			]
			},
			{
				xtype: 'list',
				id: 'results',
				loadingText: 'Loading...',
				itemTpl: '{title}<br />{publisher}',
				//layout: 'fit',
				height: 400,
				store: {
					fields: ['title', 'publisher']
				}
			}
			]
		},
});
