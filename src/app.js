Ext.Loader.setConfig({ 
    enabled:true,
})

Ext.application({
    name: "MobileOxford",
    controllers: ['home'],
    stores: ['webcams'],
    appFolder: 'app',

    launch: function() {
        console.log('app launch');

	Ext.create('MobileOxford.view.viewport');

        console.log('created the panel');
    }
})
