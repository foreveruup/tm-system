require('dotenv').config();

const app = require('./app');
const mongoose = require('mongoose');

// connection to mongodb
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));


process.on('SIGINT', async () => {
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
    process.exit(0);
});

// starting server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started: http://localhost:${PORT} `)
})
