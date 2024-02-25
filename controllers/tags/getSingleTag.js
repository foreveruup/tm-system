const Tag = require('../../models/Tag');

const getSingleTag = async (req, res) => {
    try {
        const tagId = req.params.id;
        const tag = await Tag.findById(tagId);
        if (!tag) {
            return res.status(404).json({ message: 'Tag is not found' });
        }
        res.status(200).json(task);
    } catch (error) {
        console.error('Error while getting tag:', error);
        res.status(500).json({ message: 'Error while getting tag' });
    }
};

module.exports = getSingleTag;
