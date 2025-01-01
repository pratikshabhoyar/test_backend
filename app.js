const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
//login
require("dotenv").config();
const cors = require("cors");
//
const app = express();
const port = 3000;
const mandirRoutes = require('./routes/mandirRoutes');
//login
const adminRoutes = require("./routes/adminRoutes");

// Middleware
app.use(bodyParser.json());

// Use routes
app.use('/api/mandir', mandirRoutes);
app.use("/api/admin", adminRoutes);
//login
app.use(
  cors({
    origin: "http://localhost:5173", // Only allow requests from your React frontend
    methods: ["GET", "POST"], // Specify allowed methods
    credentials: true, // Allow credentials (cookies, headers, etc.)
  })
);



// console.log(__dirname);
console.log(require.resolve('./routes/mandirRoutes'));
console.log('Mandir routes loaded successfully.');

// Start the server
//login
const PORT = process.env.PORT || 3000;
//
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
