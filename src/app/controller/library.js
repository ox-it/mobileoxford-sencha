Ext.define('MobileOxford.controller.library', {
    extend: 'Ext.app.Controller',
    views: ['librarysearch', 'librarydetail'],
    config: {
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
    },

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
			url: MobileOxford.config.getEndpoint().url + 'library/search/',
			callbackKey: 'callback',
			params: {
				format: 'js',
				title: formValues.title,
				author: formValues.author,
				isbn: formValues.isbn,
			},
			callback: function(result) {
                results.getStore().removeAll(false);
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
		var url = MobileOxford.config.getEndpoint().url + 'library/item:' + bookid + '/';
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
