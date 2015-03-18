import DS from 'ember-data';

var Order = DS.Model.extend({
	foods: DS.hasMany('food'),
	restaurants: DS.hasMany('restaurant'),
	user: DS.belongsTo('user')
});

export default Order;