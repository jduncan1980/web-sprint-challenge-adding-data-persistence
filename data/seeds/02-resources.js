exports.seed = function (knex) {
	return knex('resources').then(function () {
		// Inserts seed entries
		return knex('resources').insert([
			{ id: 1, name: 'MacBook' },
			{ id: 2, name: 'Cup Of Tea', description: 'Nice and hot.' },
			{ id: 3, name: 'Sponge' },
			{ id: 4, name: 'Cleaning Spray' },
			{ id: 5, name: 'Garbage Bag' },
			{ id: 6, name: 'DuoLingo' },
			{ id: 7, name: 'Partner', description: 'To practice with.' },
		]);
	});
};
