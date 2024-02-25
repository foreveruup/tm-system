const User = require('../../models/User');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.error('Error getting user list:', error);
        res.status(500).json({ message: 'Error getting user list' });
    }
};

module.exports = getAllUsers;
