const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api', (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});
