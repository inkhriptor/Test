import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const imgDir = path.join(process.cwd(), 'public', 'img');

  fs.readdir(imgDir, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read image folder' });
    }

    const images = files
      .filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file))
      .map(file => `/img/${file}`);

    res.status(200).json(images);
  });
}
