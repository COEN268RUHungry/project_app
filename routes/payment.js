import Ember from 'ember';

var PaymentRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('cart', 0);
	}
});


export default PaymentRoute;