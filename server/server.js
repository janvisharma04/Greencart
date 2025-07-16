import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import connectDB from './configs/db.js';
import 'dotenv/config';
import userRouter from './routes/userRoute.js';
import sellerRouter from './routes/sellerRoute.js';
import connectCloudinary from './configs/cloudnary.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import addressRouter from './routes/addressRoute.js';
import orderRouter from './routes/orderRoute.js';
import { stripeWebhooks } from './controllers/orderController.js';

const app = express();
const port = process.env.PORT || 4000;

// Connect to DB and Cloudinary
await connectDB();
await connectCloudinary();

// Allowed origins
const allowedOrigins = ['http://localhost:5173', 'https://greencart-zapi.vercel.app'];

// ✅ Stripe Webhook route (raw body)
app.post('/stripe', express.raw({ type: 'application/json' }), stripeWebhooks);

// ✅ CORS middleware - dynamic origin + credentials support
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // Allow non-browser requests (e.g., Postman)
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

// ✅ Handle preflight requests
app.options('*', cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

// ✅ Other middleware
app.use(express.json());
app.use(cookieParser());

// ✅ Routes
app.get('/', (req, res) => res.send("API is Working"));
app.use('/api/user', userRouter);
app.use('/api/seller', sellerRouter);
app.use('/api/product', productRouter);
app.use('/api/address', addressRouter);
app.use('/api/order', orderRouter);
app.use('/api/cart', cartRouter);

// ✅ Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
