const express = require("express");
const dotenv = require("dotenv");
const logger = require("./middleware/logger");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(logger);

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the Express.js Assignment!");
});

// Routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
