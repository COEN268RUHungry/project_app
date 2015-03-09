import Ember from 'ember';

var DiscoverRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('restaurant');
	}
});


export default DiscoverRoute;