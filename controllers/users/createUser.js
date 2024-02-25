const User = require('../../models/User');

const createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // checking if email exists

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User with this email already exists' });
        }

        // creating new user

        const newUser = new User({ username, email, password });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error while creating a user:', error);
        res.status(500).json({ message: 'Error while creating a user' });
    }
};

module.exports = createUser;
