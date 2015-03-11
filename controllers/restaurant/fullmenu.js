import Ember from 'ember';

var RestaurantFullmenuController = Ember.ObjectController.extend({
	actions: {
		back: function() {
			this.set('isNotFullmenu', true);
			this.transitionToRoute('restaurant');
		},
		selectCategory: function(property) {
			this.set('currentCategory', this.get('content').get('formattedFoodMenu')[property]);
		},
		add: function(item) {	
			var food = this.store.push('food', {
				id: item.foodID,
				name: item.foodName,
				price: item.foodPrice,
				quantity: 1,
				restaurant: this.get('content')
			});
			food.save();

			this.store.find('cart', 0).then(function(result){
				result.get('foods').pushObject(food);
			});
		}
	},
});

export default RestaurantFullmenuController;