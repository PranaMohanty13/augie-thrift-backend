const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Basic route
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Start the server
app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);

  // Dynamically import the open package to avoid the CommonJS/ESM issue
  const { default: open } = await import('open');
  open(`http://localhost:${port}`);  // Automatically open the browser
});
