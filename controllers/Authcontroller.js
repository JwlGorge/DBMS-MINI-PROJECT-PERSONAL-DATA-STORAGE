const User = require('../models/User');
const bcrypt = require('bcrypt');

// Register User
exports.registerUser  = async (req, res) => {
    const { mobile, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = new User({ mobile, password: hashedPassword });
    try {
        await user.save();
        res.status(201).json({ message: 'User  registered successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Authenticate User
exports.authenticateUser  = async (req, res) => {
    const { mobile, password } = req.body;
    const user = await User.findOne({ mobile });

    if (user && await bcrypt.compare(password, user.password)) {
        res.status(200).json({ message: 'Authentication successful', mobile });
    } else {
        res.status(401).json({ message: 'Invalid mobile number or password' });
    }
};