import Ember from 'ember';

var PaymentController = Ember.ObjectController.extend({
	isShowingPayment: false,
	isShowingAddress: false,
	actions: {
		showPayment: function() {
			this.set('isShowingPayment', !this.get('isShowingPayment'));
		},
		showAddress: function() {
			this.set('isShowingAddress', !this.get('isShowingAddress'));
		}
	},

	tax: function() {
		var amount = parseFloat(this.get('totalAmount').substring(1));
		var tax = amount * 0.0875;
		return '$' + tax.toFixed(2);
	}.property('model.totalAmount'),

	total: function() {
		var amount = parseFloat(this.get('totalAmount').substring(1));
		var tax = parseFloat(this.get('tax').substring(1));
		var total = amount + tax;
		return '$' + total.toFixed(2);
	}.property('model.totalAmount')
});

export default PaymentController;