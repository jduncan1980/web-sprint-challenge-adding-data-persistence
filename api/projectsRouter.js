const express = require('express');
const projects = require('./projectsModel');
const {
	validateProject,
	validateResource,
	validateTask,
} = require('../middleware/validate');
const router = express.Router();

router.get('/projects', async (req, res, next) => {
	try {
		const response = await projects.findProjects();
		res.status(200).json(response);
	} catch (error) {
		next(error);
	}
});

router.get('/resources', async (req, res, next) => {
	try {
		const response = await projects.findResources();
		res.status(200).json(response);
	} catch (error) {
		next(error);
	}
});

router.get('/tasks', async (req, res, next) => {
	try {
		const response = await projects.findTasks();
		res.status(200).json(response);
	} catch (error) {
		next(error);
	}
});

router.post('/projects', validateProject(), async (req, res, next) => {
	const body = req.body;
	try {
		const response = await projects.addProject(body);
		res.status(201).json(response);
	} catch (error) {
		next(error);
	}
});

router.post('/resources', validateResource(), async (req, res, next) => {
	const body = req.body;
	try {
		const response = await projects.addResource(body);
		res.status(201).json(response);
	} catch (error) {
		next(error);
	}
});

router.post('/tasks', validateTask(), async (req, res, next) => {
	const body = req.body;
	try {
		const response = await projects.addTask(body);
		res.status(201).json(response);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
