import Ember from 'ember';

var CartController = Ember.ObjectController.extend({
	needs: ['login'],
	isLogged: Ember.computed.alias('controllers.login.isLogged'),
	foodQuantity: 0,
	actions: {
		decrease: function(item) {
			item.set('quantity', item.get('quantity') - 1);
			this.set('foodQuantity', this.get('foodQuantity') - 1);
			if (item.get('quantity') === 0) {
				item.deleteRecord();
				item.save();
			}
		},
		increase: function(item) {
			item.set('quantity', item.get('quantity') + 1);
			this.set('foodQuantity', this.get('foodQuantity') + 1);
		},
		checkout: function() {
			if (this.get('isLogged')) {
				this.transitionToRoute('payment');
			}
			else {
				this.transitionToRoute('login');
			}
		}
	}
});

export default CartController;