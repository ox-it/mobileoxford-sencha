Ext.define('Docs.store.Classes', {
    extend: 'Ext.data.TreeStore',
    
    constructor: function() {
        Ext.apply(this, {
            storeId: 'AllClasses',
            
            fields: ['text', 'type'],
            defaultRootProperty: 'items',
            rootVisible: false,
            
            root: {
                text: 'All',
                items: [
                    {
                        text: 'API',
                        items: [
                            {
                                text: 'Ext.app.Application',
                                id: 'Ext-app-Application',
                                type: 'api',
                                leaf: true
                            }
                        ]
                    },
                    {
                        text: 'Guides',
                        items: [
                            {
                                text: 'Layouts',
                                type: 'guide',
                                id: 'layouts',
                                leaf: true
                            },
                            {
                                text: 'Data',
                                type: 'guide',
                                id: 'data',
                                leaf: true
                            }
                        ]
                    }
                ]
            }
        });
        
        this.callParent(arguments);
    }
});