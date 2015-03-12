import Ember from 'ember';

var RestaurantFullmenuController = Ember.ObjectController.extend({
		needs: ["cart"],
		foodQuantity: Ember.computed.alias("controllers.cart.foodQuantity"),
  		

	actions: {
		back: function() {
			this.set('isNotFullmenu', true);
			this.transitionToRoute('restaurant');
		},
		selectCategory: function(property) {
			this.set('currentCategory', this.get('content').get('formattedFoodMenu')[property]);
		},
		add: function(item) {	
			var number = this.get('foodQuantity') + 1;
			this.set('foodQuantity', number);
			var self = this;
			this.store.push('food', {
				id: item.foodID,
				name: item.foodName,
				price: item.foodPrice,
				restaurant: this.get('content')
			}).save().then(function(result){
				result.set('quantity', result.get('quantity') + 1);
				self.store.find('cart', 0).then(function(res){
					res.get('foods').pushObject(result);
				});
			});
		}
	},
});

export default RestaurantFullmenuController;