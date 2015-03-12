import DS from 'ember-data';

var User = DS.Model.extend({
	name: DS.attr('string'),
	email: DS.attr('string'),
	address: DS.attr('string'),
	zipCode: DS.attr('string')
//	comments: DS.hasMany('comment', {async: true})
});

User.reopenClass({
	FIXTURES: [
		{
			id: '1',
			name: 'Su',
			email: 'su@scu.edu',
			address: '500 ElCamino Real, Santa Clara, CA',
			zipCode: '95053'
			
		},
		{
			id: '2',
			name: 'Fay',
			email: 'fay@scu.edu',
			address: '500 ElCamino Real, Santa Clara, CA',
			zipCode: '95053'
		}
	]
	
});

export default User;