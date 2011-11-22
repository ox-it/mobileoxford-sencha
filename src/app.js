Ext.Loader.setConfig({ 
    enabled:true,
})

Ext.application({
    name: "MobileOxford",
    
    launch: function() {
        console.log('app launch');
        
        var home = Ext.create("Ext.Panel", {
            fullscreen: true,
            html: 'Hello Mobile Oxford!',
        });
    }
})