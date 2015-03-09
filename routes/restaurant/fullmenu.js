import Ember from 'ember';

var RestaurantFullmenuRoute = Ember.Route.extend({
	actions: {
		back: function() {
			this.controller.set('isNotFullmenu', true);
			this.transitionTo('restaurant');
		}
	},
	setupController: function(controller, model) {
    	controller.set('content', model)
				  .set('isNotFullmenu', false);        
  	}
});


export default RestaurantFullmenuRoute;