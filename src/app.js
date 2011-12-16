Ext.Loader.setConfig({ 
    enabled:true,
})

Ext.application({
    name: "MobileOxford",
    controllers: ['home', 'webcams', 'places', 'library'],
    stores: ['webcams'],
    appFolder: 'app',
    autoCreateViewport: true,
})
