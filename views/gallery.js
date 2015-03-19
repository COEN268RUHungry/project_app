import Ember from 'ember';

var GalleryView = Ember.View.extend({
	templateName: 'gallery',
	hammerOptions: {
    	swipe_velocity: 0.5
  	},
  	gestures: {
    	swipeLeft: function (event) {
      		this.get('controller').send('increaseImage');
      		return false;
    	},
        swipeRight: function (event) {
      		console.log(2);
      		this.get('controller').send('decreaseImage');
      		return false;
 	 	}
	}
});

export default GalleryView;
