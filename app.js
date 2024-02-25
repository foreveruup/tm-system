const express = require('express');
const { authenticateToken } = require('./middleware/auth');
const { errorHandler } = require('./middleware/errorHandler');
const taskRoutes = require('./routes/taskRoutes');
const userRoutes = require('./routes/userRoutes');
const tagRoutes = require('./routes/tagRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

// middleware
app.use(express.json());

// routes
app.use('/api/tasks', authenticateToken, taskRoutes);
app.use('/api/users', userRoutes);
app.use('/api/tags', authenticateToken, tagRoutes);
app.use('/api/auth', authRoutes); // Используем authRoutes для маршрутов аутентификации

// error handling
app.use(errorHandler);

module.exports = app;
