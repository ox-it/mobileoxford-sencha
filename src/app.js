Ext.Loader.setConfig({ 
	enabled:true,
	paths: { 'MobileOxford': 'app', }
})

Ext.require('MobileOxford.store.books');
Ext.require('MobileOxford.store.webcams');

Ext.application({
    name: "MobileOxford",
    controllers: ['home', 'webcams', 'places', 'library'],
    stores: ['webcams', 'books'],
    appFolder: 'app',
    autoCreateViewport: true,
})
