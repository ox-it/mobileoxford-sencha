Ext.define('MobileOxford.profile.tablet', {
    extend: 'Ext.app.Profile',
    
    config: {
        name: 'Tablet',
        namespace: 'tablet',
        controllers: ['home'],
    },

    isActive: function() {
        return Ext.os.is.Tablet || Ext.os.is.Desktop;
    },

    launch: function() {
        //Ext.create('MobileOxford.view.Viewport');
        Ext.create('MobileOxford.view.tablet.home');
    }
});
