const User = require('../../models/User');

const getSingleUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User is not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error('Error while getting user:', error);
        res.status(500).json({ message: 'Error while getting user' });
    }
};

module.exports = getSingleUser;
