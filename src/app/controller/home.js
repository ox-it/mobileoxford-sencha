Ext.define('MobileOxford.controller.home', {
    extend: 'Ext.app.Controller',
    views: ['home'],
    
    initialize: function() {
        console.log("initialized home controller");
        this.callParent();
    }
})