import Ember from 'ember';

var RestaurantController = Ember.ObjectController.extend({
	inputComment: '',
	actions: {
		changeImage: function() {
			var len = this.get('foodGallery').length;
			var i = this.get('currentImageIndex');
			i++;
			this.set('currentImageIndex', i % len);
		},
		showAddComment: function() {
			this.set('isAddingComment', !this.get('isAddingComment'));
		},
		addComment: function(param) {
			if (this.get('inputComment') !== '')
			{
				var comment = this.store.createRecord('comment', {});
				comment.set('content', this.get('inputComment'));
				comment.set('restaurant', param);
				this.store.find('user', '2').then(function(res) {
					comment.set('user', res);
					comment.save();
				});
				this.set('inputComment', '');
			}
		}
	}
});

export default RestaurantController;