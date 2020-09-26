exports.seed = function (knex) {
	return knex('tasks').then(function () {
		// Inserts seed entries
		return knex('tasks').insert([
			{
				id: 1,
				description: 'Initialize Project and install dependencies',
				completed: true,
				project_id: 1,
			},
			{
				id: 2,
				description: 'Initialize Knex and Set Up Database',
				completed: true,
				project_id: 1,
			},
			{
				id: 3,
				description: 'Create Migration and Sed Files',
				notes: 'In Progress',
				project_id: 1,
			},
			{ id: 4, description: 'Create Model and API Endpoints', project_id: 1 },
			{
				id: 5,
				description: 'Take All the food out of the Fridge',
				project_id: 2,
			},
			{
				id: 6,
				description: 'Spray all inner surfaces with cleaner.',
				project_id: 2,
			},
			{
				id: 7,
				description: 'Wipe down with sponge and put food away.',
				project_id: 2,
			},
			{ id: 8, description: 'Pick a language.', project_id: 3 },
			{
				id: 9,
				description: 'Practice with DuoLingo.',
				notes: 'Can also use other apps or books',
				project_id: 3,
			},
			{
				id: 10,
				description: 'Practice speaking with Partner.',
				notes: 'Optional but recommended',
				project_id: 3,
			},
		]);
	});
};
