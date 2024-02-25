    const jwt = require('jsonwebtoken');
    const bcrypt = require('bcrypt');
    const User = require('../../models/User');

    const loginUser = async (req, res) => {
        try {
            const { username, password } = req.body;

            // Проверка существования пользователя в базе данных
            const user = await User.findOne({ username });
            if (!user) {
                return res.status(401).json({ message: 'Invalid username or password' });
            }

            // Проверка пароля
            const validPassword = await bcrypt.compare(password, user.password);
            if (!validPassword) {
                return res.status(401).json({ message: 'Invalid username or password' });
            }

            // Создание токена доступа
            const accessToken = jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });

            // Отправка токена в теле ответа
            res.json({ accessToken });
        } catch (error) {
            console.error('Error logging in:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    };

    module.exports = { loginUser };
