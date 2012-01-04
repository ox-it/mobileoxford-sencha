/*
Copyright(c) 2011 Oxford University Computing Services
*/
Ext.define('MobileOxford.model.webcam', {
	extend: 'Ext.data.Model',
	fields: ['title', 'description', 'slug', 'credit', 'id']
});

Ext.define('MobileOxford.store.webcams', {
	extend: 'Ext.data.Store',
	requires: 'MobileOxford.model.webcam',
	model: 'MobileOxford.model.webcam',
	autoLoad: true,
	proxy: {
		type: 'jsonp',
		url: 'http://m.ox.ac.uk/webcams/?format=js',
		callbackKey: 'callback',
		reader: {
			type: 'json',
			root: 'webcams'
		}
	}
});

/*
If you have a Viewport.js (and class name of app.view.Viewport) file in the app/view/ folder then the app will automatically create that Viewport.js class.

The Viewport class in ST2 will always be there and if you specify something with fullscreen as true, it will be added as an item to the Viewport singleton.

http://www.sencha.com/forum/showthread.php?150668-ExtJS4-to-ST2
*/

Ext.define('MobileOxford.view.Viewport', {
	extend: 'Ext.NavigationView',
	xtype: 'my-viewport',
	requires: ['Ext.Toolbar'],
	config: {
		layout: 'card',
		fullscreen: true,
		items: [
			{
				xtype: 'toolbar',
				docked: 'bottom',
				title: 'O:' + navigator.onLine + " W:" + Ext.browser.is.WebKit,
				items: [
					{
						text: 'Menu',
						handler: function() {
							var overlay = Ext.create('MobileOxford.view.home', {
							    floating        : true,
							    modal           : true,
							    hidden          : true,
							    height          : 300,
							    width           : '50%',
							    scrollable      : true,
							});
							overlay.show();
						}
					}
				]
			},
			{
				xtype: 'home'
			},
		]
	}
});


Ext.define('MobileOxford.view.home', {
    extend: 'Ext.Panel',
    alias: 'widget.home',
    title: 'Mobile Oxford',
    requires: ['Ext.Button'],
    layout: 'vbox',
    config: {
    	padding: 10,
	items: [
               	{
                    xtype: 'button',
		    text: 'Places',
		    go: 'places',
                },
                {
                    xtype: 'button',
		    text: 'Webcams',
		    go: 'webcams',
                },
                {
                    xtype: 'button',
		    text: 'Library search',
		    go: 'librarysearch',
                },
                {
                    xtype: 'button',
		    text: 'Podcasts',
		    go: 'podcasts',
                }
            ],
    },
    
})

Ext.define('MobileOxford.view.webcams', {
	extend: 'Ext.Panel',
	alias: 'widget.webcams',
	title: 'Webcams',
	requires: ['Ext.dataview.List'],
	scrollable: 'vertical',
	fullscreen: true,
	layout: 'fit',
	config: {
		title: 'Webcams',
		items: [
			{
				xtype: 'list',
				id: 'webcamsList',
				loadingText: 'Loading...',
				store: 'webcams',
				layout: 'fit',
				itemTpl: '{title}',				
				height: 500,	// TODO fix hard-coded height
			}
			]
	},
});


Ext.define('MobileOxford.view.webcam', {
	extend: 'Ext.Component',
	xtype: 'webcam',
	title: 'Webcam',
	config: {
		tpl: '<div><img height="90%" src="{url}" /></div><div>{description}</div><div>{credit}</div>'

	},
});

Ext.define('MobileOxford.view.places', {
	extend: 'Ext.Container',
	alias: 'widget.places',
	title: 'Places',
	//layout: 'vbox',
	requires: [
		'Ext.Map'
	],
	config : {
		fullscreen: true,
		layout: 'fit',
		html: '<p>This is the Map Page</p>',
		items: [{
			xtype:  'map',
			layout: 'fit',
			useCurrentLocation: true,
			mapOptions: {
				zoom: 12
			}
		}]
	}
});


Ext.define('MobileOxford.view.librarysearch', {
	extend: 'Ext.form.Panel',
	alias: 'widget.librarysearch',
	title: 'Library search',
	requires: ['Ext.form.FieldSet', 'Ext.field.Text', 'Ext.Button', 'Ext.dataview.List'],
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

Ext.define('MobileOxford.view.librarydetail', {
	extend: 'Ext.Panel',
	xtype: 'librarydetail',
	title: 'Book',
	config: {
		tpl: '<div>{title}</div><div>{description}</div><div>{publisher}</div><div>{author}</div>'
	},
});

Ext.define('MobileOxford.controller.home', {
    extend: 'Ext.app.Controller',
    views: ['home'],

    refs: [
	{
		ref: 'viewport',
		selector: 'my-viewport'
	},
    ],

    init: function() {
        this.control({
		'button[go]': {
/* look for any button with the "go" parameter and setActiveItem() to that value, so you just have to tell the button to go to the xtype of your view; http://stackoverflow.com/questions/8065505/sencha-touch-2-0-cant-set-activeitem-on-viewport
*/
			tap: function(btn) {
				this.getViewport().push({ xtype: btn.go });
			}
		},
		});
    	},
})

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
	},
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

Ext.define('MobileOxford.controller.places', {
    extend: 'Ext.app.Controller',
    views: ['places'],

    refs: [
	{
		ref: 'viewport',
		selector: 'my-viewport'
	},
    ],
})

Ext.define('MobileOxford.controller.library', {
    extend: 'Ext.app.Controller',
    views: ['librarysearch', 'librarydetail'],

    refs: [
	{
		ref: 'viewport',
		selector: 'my-viewport'
	},
	{
		ref: 'searchform',
		selector: 'librarysearch'
	},
	{
		ref: 'results',
		selector: '#results'
	}
    ],

    init: function() {
        this.control({
		'#btn-search': {
			tap: function(btn) {
				this.doSearch(this.getSearchform().getValues());
			}
		},
		'#results': {
			'itemtap': function(list, index, item, evt) {
				var book = list.getStore().getAt(index);
				this.displayBookDetails(book.get('pk'));
			}
		},
		});
    	},

	doSearch: function(formValues) {
		if(!(formValues.title || formValues.author || formValues.isbn)) {
			alert('One field must be filled at least...');
			return false;
		}
		Ext.Viewport.setMask({message:"Wait!"});
		var results = this.getResults();
		Ext.util.JSONP.request({
			url: 'http://m.ox.ac.uk/library/search/',
			callbackKey: 'callback',
			params: {
				format: 'js',
				title: formValues.title,
				author: formValues.author,
				isbn: formValues.isbn,
			},
			callback: function(result) {
				if (result.page.objects) {
					var bo;
					for(book in result.page.objects) {
						bo = result.page.objects[book];
						results.getStore().add({
							title: bo.title,
							publisher: bo.publisher,
							pk: bo._pk
						});
					}
				}
				else {
					alert('No results found.');
				}
				Ext.Viewport.setMask(false);
			}
		});
	},

	displayBookDetails: function(bookid) {
		Ext.Viewport.setMask({message:"Wait!"});
		var viewport = this.getViewport();
		var url = 'http://m.ox.ac.uk/library/item:' + bookid + '/';
		Ext.util.JSONP.request({
			url: url,
			callbackKey: 'callback',
			params: {
			    format: 'js',
			},
			callback: function(result) {
				if (result && result.item) {
					viewport.push({ xtype: 'librarydetail', title: result.item.title, data: result.item });
				}
				else {
					alert('There was an error retrieving the book details.');
				}
				Ext.Viewport.setMask(false);
			}
		});
	}
})



