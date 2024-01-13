import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';

const EditBook = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const response = await axios.get(`/api/book/${id}`);
        const bookData = response.data;

        setTitle(bookData.title);
        setAuthor(bookData.author);
      } catch (error) {
        console.error('Error fetching book data:', error.message);
        setError('Error fetching book data. Please try again.');
      }
    };

    fetchBookData();
  }, [id]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const formData = {
  //     title: title,
  //     author: author
  //   };

  //   try {
  //     const response = await axios.put(`/api/book/${id}`, formData);

  //     if (response.status === 200) {
  //       const editedBook = response.data;
  //       console.log('Book edited successfully:', editedBook);
  //       navigate('/');
  //     } else {
  //       console.error('Failed to edit book. Server response:', response);
  //       setError('Failed to edit book. Please try again.');
  //     }
  //   } catch (error) {
  //     console.error('Error editing book:', error.message);
  //     setError('Error editing book. Please try again.');
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      title: title,
      author: author
    };

    try {
      const response = await axios.put(`/api/book/${id}`, formData)
      .then(()=>{
        navigate('/');
      })

      if (response.status === 200) {
        const book = response.data;
        console.log('Book added successfully:', book);
        // Optionally, you can handle success or navigate to another page here
      } else {
        console.error('Failed to add book:', response.data);
        setError(response.data.message || 'Failed to add book. Please try again.');
      }
    } catch (error) {
      console.error('Error adding book:', error.message);
      setError('Error adding book. Please try again.');
    }
  };
  return (
    <div>
        <Link 
        to="/"
        className='flex'>
        <svg width="50px" height="50px" id="Layer_1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m351.79 246h-170.46l56-56a10 10 0 0 0 -14.15-14.14l-67.86 67.86a17.31 17.31 0 0 0 0 24.48l67.86 67.86a10 10 0 0 0 14.11-14.06l-56-56h170.5a10 10 0 0 0 0-20z" fill="rgb(0,0,0)"/></svg>
        <p className='ml-0 mt-3'>Back</p>
        </Link>
      <div className='block bg-indigo-400 w-96 h-96'>
        <h1 className='p-4 text-4xl font-serif font-bold'>Edit</h1>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            className='p-4 m-2 h-6 bg-indigo-200 p-4 text-xl font-serif'
            type='text'
            name='title'
            placeholder='Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className='p-4 m-2 h-6 bg-indigo-200 p-4 text-xl font-serif'
            type='text'
            name='author'
            placeholder='Author'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <button className='p-2 my-6 w-56 text-2xl font-bold font-serif' type='submit'>
            Change
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBook;
