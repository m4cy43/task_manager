const express = require("express");
const dotenv = require("dotenv").config({ path: "../.env" });
const port = process.env.PORT || 3000;
const app = express();

const errorHandler = require("./middleware/errorMiddleware");
const dbConnect = require("./config/db");

// MongoDB connection
dbConnect();

// Request body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/goal", require("./routes/goalRoute"));
app.use("/api/user", require("./routes/userRoute"));


// Error middleware
app.use(errorHandler);

// Port listening
app.listen(port, () => console.log(`Port: ${port}`));
