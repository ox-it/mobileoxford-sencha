Ext.Loader.setConfig({ 
	enabled:true,
	paths: { 'MobileOxford': 'app', }
})

Ext.application({
    name: "MobileOxford",
    icon: 'icon.png',
    phoneIcon: 'icon.png',
    tabletIcon: 'icon.png',
    controllers: ['home', 'webcams'],
    stores: ['webcams'],
    models: ['webcam'],
    views: ['home', 'webcams', 'webcam', 'mainmenu'],
    appFolder: 'app',
    profiles: ['phone', 'tablet']
})
