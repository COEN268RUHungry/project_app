import Ember from 'ember';

var PaymentRoute = Ember.Route.extend({
  renderTemplate: function() {
     this.render('payment');
  },
  setupController: function(controller) {
    controller.set('title', 'Payment');
  }
});


export default PaymentRoute;