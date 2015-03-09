import Ember from 'ember';

var RestaurantRoute = Ember.Route.extend({
	model: function(param) {
		return this.store.find('restaurant', param.restaurant_id);
	},
	setupController: function(controller, model) {
    	controller.set('content', model)
              	  .set('isNotFullmenu', true);        
  	}
});


export default RestaurantRoute;