const Task = require('../../models/Task');

const deleteTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const deletedTask = await Task.findByIdAndDelete(taskId);
        if (!deletedTask) {
            return res.status(404).json({ message: 'Task is not found' });
        }
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        console.error('Error while deleting a task:', error);
        res.status(500).json({ message: 'Error while deleting a task' });
    }
};

module.exports = deleteTask;
