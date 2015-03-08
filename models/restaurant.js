import DS from 'ember-data';

var Restaurant = DS.Model.extend({
	restaurantName: DS.attr('string'),
	restaurantZipCode: DS.attr('number')
});

Restaurant.reopenClass({
	FIXTURES: [
		{
			id: 1,
			restaurantName: 'Boiling Point',
			restaurantZipCode: '94539'
		}
	]
});

export default Restaurant;