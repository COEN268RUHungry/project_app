import Ember from 'ember';

var LoginRoute = Ember.Route.extend({

	model: function() {
		return this.store.all('user');
	},
	setupController: function(controller, model) {
    	controller.set('content', model)
              	  .set('isLogged', false);        
  	},
  	
    
    
});


export default LoginRoute;