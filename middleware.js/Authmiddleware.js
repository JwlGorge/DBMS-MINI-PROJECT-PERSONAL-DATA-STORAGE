const User = require('../models/User');

exports.isAuthenticated = async (req, res, next) => {
    const { mobile, password } = req.body;

    const user = await User.findOne({ mobile });
    if (user && await bcrypt.compare(password, user.password)) {
        req.user = user; // Attach user to request object
        next(); // Proceed to the next middleware/controller
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
};