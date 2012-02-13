Ext.define('MobileOxford.profile.phone', {
    extend: 'Ext.app.Profile',
    
    config: {
        name: 'Phone',
        namespace: 'phone',
        controllers: ['home'],
    },

    isActive: function() {
        return Ext.os.is.Phone;
    },

    launch: function() {
        Ext.create('MobileOxford.view.phone.home');
    }
});
