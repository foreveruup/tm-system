const Tag = require('../../models/Tag');

const updateTag = async (req, res) => {
    try {
        const tagId = req.params.id;
        const {title, description, status} = req.body;
        const updatedTag = await Tag.findByIdAndUpdate(tagId, {title, description, status}, {new: true});
        if (!updatedTag) {
            return res.status(404).json({message: 'Tag is not found'});
        }
        res.status(200).json(updatedTag);
    } catch(error) {
        console.error('Error while updating tag:', error);
        res.status(500).json({ message: 'Error while updating tag' });
    }
};

module.exports = updateTag;