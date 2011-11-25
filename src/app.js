Ext.Loader.setConfig({ 
    enabled:true,
})

Ext.application({
    name: "MobileOxford",
    controllers: ['home'],
    stores: ['webcams'],
    appFolder: 'app',
    autoCreateViewport: true,

    launch: function() {
        console.log('app launch');
    }
})
