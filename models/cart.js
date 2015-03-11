import DS from 'ember-data';

var Cart = DS.Model.extend({
	foods: DS.hasMany('food'),
	
	restaurantsList: function() {
		var foods = this.get('foods').currentState;
		var rests = [];
		for (var i=0; i<foods.length; i++) {
			rests.push(foods[i].get('restaurant'));
		}
		rests = rests.uniq();
		var res = [];
		for (var j=0; j<rests.length; j++) {
			var item = {};
			item.restaurantName = rests[j].get('name');
			item.food = foods.filterBy('restaurant', rests[j]);
			item.amount = 0;
			for (var k=0; k<item.food.length; k++) {
				item.amount += parseFloat((item.food[k].get('price')).substring(1)) * parseInt(item.food[k].get('quantity'));
			}
			item.amount = '$' + item.amount.toFixed(2);
			res.push(item);
		}
		return res;
		
	}.property('foods')
});

Cart.reopenClass({
	FIXTURES: [
		{
			id: 0,
			foods: []
		}
	]
});

export default Cart;