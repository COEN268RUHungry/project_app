import Ember from 'ember';

var RestaurantRoute = Ember.Route.extend({
  renderTemplate: function() {
     this.render('restaurant');
  },
  setupController: function(controller) {
    controller.set('title', 'Restaurant');
  }
});


export default RestaurantRoute;