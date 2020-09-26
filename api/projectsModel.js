const db = require('../data/dbConfig');

const findProjects = () => {
	return db('projects');
};

const addProject = async (project) => {
	const id = await db('projects').insert(project);
	return db('projects').where({ id }).first();
};

const findResources = () => {
	return db('resources');
};

const addResource = async (resource) => {
	const id = await db('resources').insert(resource);
	return db('resources').where({ id }).first();
};

const findTasks = () => {
	return db('tasks as t')
		.join('projects as p', 'p.id', 't.project_id')
		.select(
			't.id',
			't.description as taskDescription',
			't.completed as completed',
			'p.name as projectName',
			'p.description as projectDescription'
		);
};

const addTask = async (task) => {
	const id = await db('tasks').insert(task);
	return db('tasks').where({ id }).first();
};

module.exports = {
	findProjects,
	addProject,
	findResources,
	addResource,
	findTasks,
	addTask,
};
