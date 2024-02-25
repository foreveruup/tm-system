const User = require('../../models/User');

const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const { username, email } = req.body;
        const updatedUser = await User.findByIdAndUpdate(userId, { username, email }, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'User is not found' });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        console.error('Error while updating a user:', error);
        res.status(500).json({ message: 'Error while updating a user' });
    }
};

module.exports = updateUser;
