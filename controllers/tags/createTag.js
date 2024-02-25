const Tag = require('../../models/Tag');

const createTag = async (req, res) => {
    try {
        const { title, description, status } = req.body;
        const newTag = new Tag({ title, description, status, createdAt: new Date() });
        await newTag.save();
        res.status(201).json(newTag);
    } catch (error) {
        console.error('Error while creating tag:', error);
        res.status(500).json({ message: 'Error while creating tag' });
    }
};

module.exports = createTag;
