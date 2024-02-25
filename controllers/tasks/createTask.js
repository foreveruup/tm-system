const Task = require('../../models/Task');

const createTask = async (req, res) => {
    try {
        const { title, description, status } = req.body;
        const newTask = new Task({ title, description, status, createdAt: new Date() });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        console.error('Error while creating a task:', error);
        res.status(500).json({ message: 'Error while creating a task' });
    }
};

module.exports = createTask;
