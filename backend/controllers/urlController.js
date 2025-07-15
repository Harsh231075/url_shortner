import Url from '../models/Url.js';
import { nanoid } from 'nanoid';


export const shortenUrl = async (req, res) => {
  try {
    const { originalUrl } = req.body;
    const userId = req.user._id; // From auth middleware

    if (!originalUrl) {
      return res.status(400).json({ message: 'Original URL is required.' });
    }

    // Generate a unique short code
    const shortCode = nanoid(6); // like "Ab12xY"

    const newUrl = new Url({
      originalUrl,
      shortCode,
      createdBy: userId,
    });

    await newUrl.save();

    return res.status(201).json({
      message: 'Short URL created successfully',
      shortUrl: `${process.env.BASE_URL}/${shortCode}`, // example: https://short.ly/Ab12xY
    });
  } catch (error) {
    console.error('Shorten URL error:', error);
    res.status(500).json({ message: 'Server error while shortening URL' });
  }
};




export const redirectToOriginalUrl = async (req, res) => {
  try {
    const { code } = req.params;

    const foundUrl = await Url.findOne({ shortCode: code });

    if (!foundUrl) {
      return res.status(404).json({ message: 'Short URL not found' });
    }

    // Increment click count and save click history
    foundUrl.clickCount += 1;
    foundUrl.clickHistory.push({
      ip: req.ip,
      timestamp: new Date(),
    });

    await foundUrl.save();

    // Redirect to original URL
    console.log('Redirecting to:', foundUrl.originalUrl);
    return res.redirect(foundUrl.originalUrl);
  } catch (error) {
    console.error('Redirect error:', error);
    res.status(500).json({ message: 'Server error during redirect' });
  }
};
