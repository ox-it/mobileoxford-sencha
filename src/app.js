Ext.Loader.setConfig({ 
	enabled:true,
	paths: { 'MobileOxford': 'app', }
})

Ext.require([
    'MobileOxford.store.webcams',
    'MobileOxford.config',
    'MobileOxford.controller.home',
]);

Ext.application({
    name: "MobileOxford",
    icon: 'icon.png',
    phoneIcon: 'icon.png',
    tabletIcon: 'icon.png',
    controllers: ['home', 'webcams', 'places', 'library', 'podcasts'],
    stores: ['webcams'],
    models: ['webcam'],
    views: ['home', 'librarysearch', 'librarydetail', 'places', 'podcasts', 'webcam', 'webcams'],
    appFolder: 'app',
    viewport: { xclass: 'MobileOxford.view.Viewport' },
    launch: function() {
        console.log('ext.application launch');
        Ext.create('MobileOxford.view.Viewport');
    }
})
