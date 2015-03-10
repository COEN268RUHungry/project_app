import Ember from 'ember';

var RestaurantFullmenuController = Ember.ObjectController.extend({
	actions: {
		back: function() {
			this.set('isNotFullmenu', true);
			this.transitionToRoute('restaurant');
		},
		selectCategory: function(property) {
			this.set('currentCategory', this.get('content').get('formattedFoodMenu')[property]);
		}
	},
});

export default RestaurantFullmenuController;