exports.seed = function (knex) {
	return knex('projects').then(function () {
		// Inserts seed entries
		return knex('projects').insert([
			{
				id: 1,
				name: 'Take Sprint Challenge',
				description: 'Create migrations, seeds, and endpoints.',
			},
			{
				id: 2,
				name: 'Clean out the Refrigerator',
				description: 'Get A Fresh Food start!',
				completed: true,
			},
			{
				id: 3,
				name: 'Learn a new language.',
				description: 'Learn how to speak to a new group of people.',
			},
		]);
	});
};
