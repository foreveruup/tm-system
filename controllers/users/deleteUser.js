const User = require('../../models/User');

const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const deletedUser = await User.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User is not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error while deleting a user:', error);
        res.status(500).json({ message: 'Error while deleting a user' });
    }
};

module.exports = deleteUser;
