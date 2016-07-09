define(["backbone"],function(){
	var Router = Backbone.Router.extend({
	
	  routes: {
	    "home":                 "home",  
	    "leyuan":       	    "leyuan",  
	    "order":                "order",   
	    "mime":					"mime",
	    "*actions": 			"defaultAction"
	  },
	
	  home: function() {
	    require(["./mod/home.js"],function(home){
	    	home.render();
	    })
	  },
	
	  leyuan: function() {
	    require(["./mod/leyuan.js"],function(home){
	    	home.render();
	    })
	  },
	   order: function() {
	    require(["./mod/order.js"],function(home){
	    	home.render();
	    })
	  },
	    mime: function() {
	    require(["./mod/mime.js"],function(home){
	    	home.render();
	    })
	  },
	  
	  defaultAction:function(){
	  	location.hash = 'home';
	  }
	});
	var router = new Router();
	return router;
})