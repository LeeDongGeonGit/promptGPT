import express from "express";
import cors from "cors";
import morgan from "morgan";

import adminRoutor from "./routes/admin.route.js"
import chatRouter from "./routes/chat.route.js"
import authRouter from './routes/auth.route.js';
import { protect } from './middlewares/auth.middleware.js';
import { apiKeyAuth } from './middlewares/auth.middleware.js';

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(apiKeyAuth);
// routes
app.use("/api/admin/prompt",protect, adminRoutor)
app.use("/api/chat",chatRouter)
app.use('/api/auth', authRouter);

export default app;