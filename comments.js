// Create web server

const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies

app.use(express.json());

// In-memory storage for comments
let comments = [];

// Route to get all comments

app.get('/comments', (req, res) => {
  res.json(comments);
});

// Route to add a new comment

app.post('/comments', (req, res) => {
  const { author, text } = req.body;
    if (author && text) {
    const newComment = { author, text, timestamp: new Date() };
    comments.push(newComment);
    res.status(201).json(newComment);
  }
    else {
    res.status(400).json({ error: 'Author and text are required.' });
  }
});

// Route to delete a comment by index

app.delete('/comments/:index', (req, res) => {
    const index = parseInt(req.params.index, 10);
    if (index >= 0 && index < comments.length) {
    const deletedComment = comments.splice(index, 1);
    res.json(deletedComment[0]);
  }
    else {
    res.status(404).json({ error: 'Comment not found.' });
  }
});

// Start the server

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});