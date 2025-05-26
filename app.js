const express = require('express');
const app = express();
const port = 4000;

// Route for root URL
app.get('/api/', (req, res) => {
  res.send('Hello, World test!');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
