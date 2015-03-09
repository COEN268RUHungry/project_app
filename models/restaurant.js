import DS from 'ember-data';

var Restaurant = DS.Model.extend({
	name: DS.attr('string'),
	zipCode: DS.attr('number'),
	city: DS.attr('string'),
	restaurantImage: DS.attr('string'),
	foodImage: DS.attr('string'),
	openHours: DS.attr('string'),
	acceptCreditCard: DS.attr('string'),
	phone: DS.attr('string'),
	website: DS.attr('string'),
	address: DS.attr('string'),
	type: DS.attr('string')
});

Restaurant.reopenClass({
	FIXTURES: [
		{
			id: 1,
			name: 'Boiling Point',
			zipCode: '94539',
			city: 'Fremont, CA',
			restaurantImage: '/images/boilingpoint.jpg',
			foodImage: '/images/boilingpoint/hotpot.jpg',
			openHours: '11:00 PM -- 11:00 PM',
			acceptCreditCard: 'Visa/Mastercard/Discover',
			phone: '(510)498-8896',
			website: 'http://www.bpgroupusa.com',
			address: '46807 Warm Springs Blvd, Fremont, CA 94539',
			type: 'Taiwanese, Hotpot, Milktea'
		},
		{
			id: 2,
			name: 'Tpumps',
			zipCode: '95014',
			city: 'Cupertino, CA',
			restaurantImage: '/images/tpumps.jpg',
			foodImage: '/images/tpumps/milktea.jpg',
			openHours: '11:00 PM -- 9:00 PM',
			acceptCreditCard: 'Visa/Mastercard',
			phone: '(650)548-1085',
			website: 'http://www.tpumps.com',
			address: '19959 Stevens Creek Blvd, Cupertino, CA 95014',
			type: 'Tea, Milktea'
		},
		{
			id: 3,
			name: 'ZENSEN Sushi Express',
			zipCode: '94560',
			city: 'Newark, CA',
			restaurantImage: '/images/zensensushi.jpg', 
			foodImage: '/images/zensen/sushi.jpg',
			openHours: '11:30 AM -- 9:30 PM',
			acceptCreditCard: 'Visa/Mastercard/AMEX',
			phone: '(510) 797-3500',
			website: 'http://www.sushiexpress.us',
			address: '35233 Newark Blvd, Ste A, Newark, CA 94560',
			type: 'Japanese, Sushi'
		},
		{
			id: 4,
			name: 'Shao Mountain',
			zipCode: '94538',
			city: 'Fremont, CA',
			restaurantImage: '/images/shaomountain.jpg',
			foodImage: '/images/shaomountain/lotus.jpg',
			openHours: '11:00 AM -- 2:30 PM	5:00 PM -- 9:30 PM',
			acceptCreditCard: 'Visa/Mastercard',
			phone: '(510) 656-1638',
			website: 'http://www.yelp.com/biz/shao-mountain-fremont',
			address: '43749 Boscell Rd, Fremont, CA 94538',
			type: 'Chinese'
		}
	]
});

export default Restaurant;