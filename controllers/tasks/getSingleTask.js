const Task = require('../../models/Task');

const getSingleTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.taskId);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json(task);
    } catch (error) {
        console.error('Error while getting task:', error);
        res.status(500).json({ message: 'Error while getting task' });
    }
};

module.exports = getSingleTask;
