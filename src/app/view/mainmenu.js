Ext.define('MobileOxford.view.mainmenu', {
    extend: 'Ext.Panel',
    xtype: 'mainmenu',
    config: {
        layout: 'fit',
        items: [
            {
                xtype: 'list',
                items: [
                    {
                        xtype: 'button',
                        text: 'Webcams',
                    },
                    {
                        xtype: 'button',
                        text: 'Library'
                    }
                 ],
                /*itemTpl: '{text}',
                data: [
                    { text: 'Webcams', url: 'webcams' },
                    { text: 'Library', url: 'library' },
                ]*/
            },
        ]
    }
});
