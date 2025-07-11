// authUser.js
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const authUser = async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return res.json({ success: false, message: 'Not Authorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);  // or decoded._id depending on how you signed the token

        if (!user) {
            return res.json({ success: false, message: 'User not found' });
        }

        req.user = user; // ✅ Now req.user._id will work
        next();
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
};

export default authUser;
