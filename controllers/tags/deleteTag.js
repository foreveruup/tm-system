const Tag = require('../../models/Tag');

const deleteTag = async (req, res) => {
    try {
        const tagId = req.params.id;
        const deletedTag = await User.findByIdAndDelete(tagId);
        if (!deletedTag) {
            return res.status(404).json({ message: 'Tag is not found' });
        }
        res.status(200).json({ message: 'Tag deleted successfully' });
    } catch (error) {
        console.error('Error while deleting tag:', error);
        res.status(500).json({ message: 'Error while deleting a tag' });
    }
};

module.exports = deleteTag;
