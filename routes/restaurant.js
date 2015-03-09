import Ember from 'ember';

var RestaurantRoute = Ember.Route.extend({
	model: function(param) {
		return this.store.find('restaurant', param.restaurant_id);
	}
});


export default RestaurantRoute;