import DS from 'ember-data';

var Food = DS.Model.extend({
	name: DS.attr('string'),
	price: DS.attr('string'),
	quantity: DS.attr('number', {
		defaultValue: 0
	}),
	restaurant: DS.belongsTo('restaurant')
});

Food.reopenClass({
	FIXTURES: [
		{
			id: 0
		}
	]
});

export default Food;