const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
//login
require("dotenv").config();
const cors = require("cors");
//
const app = express();
const port = 3000;
//addmandir
const mandirRoutes = require('./routes/mandirRoutes');
//login
const adminRoutes = require("./routes/adminRoutes");

//addevent
const eventRoutes = require('./routes/eventRoutes');

//addbook
const bookRoutes = require('./routes/bookRoutes');
const suvicharRoutes = require('./routes/suvicharRoutes');
const horoscopeRoutes = require('./routes/dailyhoroscopeRoutes');

// Middleware
app.use(bodyParser.json());

// Use routes
app.use('/api/mandir', mandirRoutes);
app.use("/api/admin", adminRoutes);
//add event
app.use('/api/events', eventRoutes);
//book
 app.use('/api/books', bookRoutes);
app.use('/api/suvichars', suvicharRoutes);
app.use('/api/horoscope', horoscopeRoutes);
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
//add event
app._router.stack.forEach((middleware) => {
  if (middleware.route) {
    console.log(middleware.route);
  }
});
// Error handling middleware (horoscope)
app.use((err, req, res, next) => {
  console.error(err.stack); // Logs the error stack trace
  res.status(500).json({ error: 'Internal Server Error', message: err.message });
});