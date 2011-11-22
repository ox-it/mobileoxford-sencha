Ext.define('Kitchensink.view.Ajax', {
    extend: 'Ext.Container',
    config: {
        layout    : 'fit',
        scrollable: true,
        items: [
            {
                xtype: 'panel',
                id: 'Ajax',
                styleHtmlContent: true
            },
            {
                docked: 'top',
                xtype: 'toolbar',
                items: [
                    {
                        text: 'Load using Ajax',
                        handler: function() {
                            var panel = Ext.getCmp('Ajax');

                            panel.element.mask('Loading...', 'x-mask-loading', false);
                            Ext.Ajax.request({
                                url: 'test.json',
                                success: function(response) {
                                    panel.update(response.responseText);
                                    panel.element.unmask();
                                }
                            });
                        }
                    }
                ]
            }
        ]
    }
});
