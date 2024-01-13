const express = require('express');
const router = express.Router();
const bookModel = require('../models/books');

router.post('/api/create', async (req, res) => {
  try {
      const book = await bookModel.create({
          title: req.body.title,
          author: req.body.author
      });
      res.status(200).send(book);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
  }
});
router.get('/api/showall', async (req, res) => {
  try {
      const books = await bookModel.find();

      res.status(200).send(books);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
  }
});


router.get('/api/book/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const book = await bookModel.findById(id);
  
        res.status(200).send(book);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
  });


router.put('/api/book/:id', async (req, res) => {
  try {
      const { id } = req.params;
      const book = await bookModel.findByIdAndUpdate(id, {
          title: req.body.title,
          author: req.body.author
      });
      res.status(200).send(book);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.delete('/api/delete/:id', async (req, res) => {
  try {
      const { id } = req.params;
      const deletedBook = await bookModel.findByIdAndDelete(id);

      if (!deletedBook) {
          // Book with the specified ID was not found
          return res.status(404).json({ message: 'Book not found' });
      }

      res.status(200).send({message: 'Book deleted'});
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
  }
});


module.exports = router;