const Task = require('../../models/Task');

const updateTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const {title, description, status} = req.body;
        const updatedTask = await Task.findByIdAndUpdate(taskId, {title, description, status}, {new: true});
        if (!updatedTask) {
            return res.status(404).json({message: 'Task is not found'});
        }
        res.status(200).json(updatedTask);
    } catch(error) {
        console.error('Error while updating a task:', error);
        res.status(500).json({ message: 'Error while updating a task' });
    }
};

module.exports = updateTask;