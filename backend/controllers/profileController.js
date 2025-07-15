import Url from '../models/Url.js';
import User from '../models/User.js';

export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.status(200).json({ user });
  } catch (err) {
    console.error('GetMe error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getMyUrls = async (req, res) => {
  try {
    const urls = await Url.find({ createdBy: req.user._id }).sort({ createdAt: -1 });


    const updatedUrls = urls.map((url) => ({
      _id: url._id,
      originalUrl: url.originalUrl,
      shortCode: url.shortCode,
      shortUrl: `${req.protocol}://${req.get('host')}/${url.shortCode}`, // 👈 Build full URL
      clickCount: url.clickCount,
      createdAt: url.createdAt,
    }));

    res.status(200).json({ urls: updatedUrls });
  } catch (err) {
    console.error('GetMyUrls error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

export const deleteUrl = async (req, res) => {
  try {
    const url = await Url.findById(req.params.id);

    if (!url) {
      return res.status(404).json({ message: 'URL not found' });
    }

    // Only creator can delete
    if (url.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to delete this URL' });
    }

    await url.deleteOne();

    res.status(200).json({ message: 'URL deleted successfully' });
  } catch (err) {
    console.error('Delete URL error:', err);
    res.status(500).json({ message: 'Server error while deleting' });
  }
};