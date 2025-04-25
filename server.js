const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const IMG_DIR = path.join(__dirname, 'img');

app.use(express.static(__dirname));

app.get('/images', (req, res) => {
  fs.readdir(IMG_DIR, (err, files) => {
    if (err) return res.status(500).json({ error: 'Failed to read image folder' });

    const imageFiles = files
      .filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file))
      .map(file => '/img/' + file);

    res.json(imageFiles);
  });
});

app.listen(3000, () => console.log('Server running at http://localhost:3000'));
