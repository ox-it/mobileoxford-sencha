Ext.define('MobileOxford.controller.library', {
    extend: 'Ext.app.Controller',
    views: ['librarysearch'],

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
				Ext.Viewport.setMask({message:"Wait!"});
				var formValues = this.getSearchform().getValues();
				var data = new Array();
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
									publisher: bo.publisher
								});
							}
						}
						else {
							alert('No results found.');
						}
						Ext.Viewport.setMask(false);
					}
				});
			}
		},
		});
    	},
})
