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

const findResourcesByProjectId = (id) => {
	return db('resources as r')
		.join('projects_resources as pr', 'r.id', 'pr.resource_id')
		.join('projects as p', 'p.id', 'pr.project_id')
		.select('p.name as projectName', 'r.name', 'r.description')
		.where('pr.project_id', id);
};

const findProjectsByResourceId = (id) => {
	return db('projects as p')
		.join('projects_resources as pr', 'p.id', 'pr.project_id')
		.join('resources as r', 'r.id', 'pr.resource_id')
		.select('r.name as resourceName', 'p.name as projectName')
		.where('pr.resource_id', id);
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

// Find all tasks for project.
const findTasksByProjectId = (id) => {
	return db('tasks').where('project_id', id);
};
module.exports = {
	findProjects,
	addProject,
	findResources,
	addResource,
	findTasks,
	addTask,
	findResourcesByProjectId,
	findTasksByProjectId,
	findProjectsByResourceId,
};
