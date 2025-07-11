import User from "../models/User.js";

// Update User CartData : /api/cart/update
export const updateCart = async (req, res) => {
    try {
        const userId = req.user._id; // ✅ Get userId from auth middleware
        const { cartItems } = req.body;

        if (!cartItems) {
            return res.status(400).json({ success: false, message: "No cart items provided" });
        }

        await User.findByIdAndUpdate(userId, { cartItems });

        res.json({ success: true, message: "Cart Updated" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ success: false, message: error.message });
    }
};

