Ext.Loader.setConfig({ 
	enabled:true,
	paths: { 'MobileOxford': 'app', }
})

Ext.require('MobileOxford.store.webcams');

Ext.application({
    name: "MobileOxford",
    controllers: ['home', 'webcams', 'places', 'library', 'podcasts'],
    stores: ['webcams'],
    appFolder: 'app',
    autoCreateViewport: true,
})
