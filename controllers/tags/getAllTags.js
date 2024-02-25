const Tag = require('../../models/Tag');

const getAllTag = async (req, res) => {
    try {
        const tag = await Tag.find();
        res.status(200).json(tag);
    } catch (error) {
        console.error('Error getting tag list:', error);
        res.status(500).json({ message: 'Error getting tag list' });
    }
};

module.exports = getAllTag;
