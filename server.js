const express = require('express');
const cors = require('cors');  // Import the CORS package

const app = express();
const port = process.env.PORT || 5000;

// Enable CORS
app.use(cors());

// Basic route
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Start the server
app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);

  const { default: open } = await import('open');
  open(`http://localhost:${port}`);
});
