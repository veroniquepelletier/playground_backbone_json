define([
  // Libraries.
  "jquery",
  "lodash",
  "backbone",

  // Plugins.
  "plugins/backbone.layoutmanager"
],

function($, _, Backbone) {

    console.log('new app mediator')

    ApplicationMediator = Backbone.View.extend({

        el: $("#search"),
        events: {
            //'click input[type=button]': 'doSearch',
            'click': 'onClick'
        },
        initialize: function(){
            _.bindAll(this, 'render');
            // fixes loss of context for 'this' within methods
            console.log('******init')
            this.render();
            console.log('******su[pposed to render')
        },
        render: function(){
            console.log('***render')
            //Pass variables in using Underscore.js Template
           //var variables = { search_label: "My Search" };
            // Compile the template using underscore
            //var template = _.template( $("#search_template").html(), variables );
            // Load the compiled HTML into the Backbone "el"
            //$(this.el).html(template);
        },
        onClick: function() {
            console.log('clicked')
        },
        doSearch: function( event ){
            console.log('clicked')
            // Button clicked, you can access the element that was clicked with event.currentTarget
            alert( "Search for " + $("#search_input").val() );
        }
    });
});
