import Ember from 'ember';

var RestaurantController = Ember.ObjectController.extend({
	actions: {
		changeImage: function() {
			var len = this.get('foodGallery').length;
			var i = this.get('currentImageIndex');
			i++;
			this.set('currentImageIndex', i % len);
		}
	}
});

export default RestaurantController;