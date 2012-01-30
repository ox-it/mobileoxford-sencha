Ext.Loader.setConfig({ 
	enabled:true,
	paths: { 'MobileOxford': 'app', }
})

/*
Ext.require([
    'MobileOxford.store.webcams',
    'MobileOxford.config'
]);
*/

Ext.application({
    name: "MobileOxford",
    icon: 'icon.png',
    phoneIcon: 'icon.png',
    tabletIcon: 'icon.png',
    controllers: ['home', 'webcams', 'places', 'library', 'podcasts'],
    stores: ['webcams'],
    appFolder: 'app',
    autoCreateViewport: true,
})
