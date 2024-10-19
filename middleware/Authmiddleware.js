const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.authenticate = async (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Assuming you're sending the token as a Bearer token

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.userId); // Attach the user to the request object
        next(); // Call the next middleware
    } catch (error) {
        res.status(400).json({ message: 'Invalid token' });
    }
};
