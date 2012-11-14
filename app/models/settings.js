define([
  "jquery",
  "lodash",
  "backbone",
],

function($, _, Backbone) {
  
    console.log('::model::settings');
    // We extend the Backbone.Model prototype to build our own
    var UserSettings = Backbone.Model.extend({
        // We can pass it default values.
        defaults : {
            name : null,
            id : false,
        },
    });
    
    var Settings = Backbone.Collection.extend({
        model: UserSettings,
    })
    
    Settings = new UserSettings();
    
    Settings.url = url = "./assets/settings/userSettings.json";
    
    Settings.bind('reset', function() { 
    }); 


    Settings.fetch({ url: "./assets/settings/userSettings.json", success: function() {
        console.log(Settings);
    }});
   
});

