const db = require('../data/dbConfig');

const validateProject = () => {
	return (req, res, next) => {
		const project = req.body;
		if (!project.name) {
			res.status(400).json({ message: 'Missing Project Data' });
		} else {
			next();
		}
	};
};

const validateTask = () => {
	return (req, res, next) => {
		const task = req.body;
		if (!task.description || !task.project_id) {
			res.status(400).json({ message: 'Missing Task Data' });
		} else {
			next();
		}
	};
};

const validateResource = () => {
	return (req, res, next) => {
		const resource = req.body;
		if (!resource.name) {
			res.status(400).json({ message: 'Missing Show Data' });
		} else {
			next();
		}
	};
};

module.exports = {
	validateProject,
	validateResource,
	validateTask,
};
