const Task = require('../../models/Task');

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        console.error('Error getting tasks list:', error);
        res.status(500).json({ message: 'Error getting tasks list' });
    }
};

module.exports = getAllTasks;
