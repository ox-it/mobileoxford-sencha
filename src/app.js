Ext.Loader.setConfig({ 
    enabled:true,
})

Ext.application({
    name: "MobileOxford",
    controllers: ['home'],
    
    launch: function() {
        console.log('app launch');
        var home = Ext.create("Ext.Panel", {
            fullscreen: true,
            items: [
                {
                    xtype: 'toolbar',
                    docked: 'top',
                    title: 'Mobile Oxford',
                },
                {
                    xtype: 'home',
                },
            ]
            
        });
        console.log('created the panel');
    }
})