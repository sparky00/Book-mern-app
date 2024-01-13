import React,{useEffect} from 'react'
import axios from 'axios'
import {useNavigate, useParams, Link} from 'react-router-dom'

const Delete = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const handleDelete =()=>{
    axios.delete(`/api/delete/${id}`)
    .then(()=>{
      navigate('/');
    })

  };

  return (<>
  <Link 
        to="/"
        className='flex'>
        <svg width="50px" height="50px" id="Layer_1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m351.79 246h-170.46l56-56a10 10 0 0 0 -14.15-14.14l-67.86 67.86a17.31 17.31 0 0 0 0 24.48l67.86 67.86a10 10 0 0 0 14.11-14.06l-56-56h170.5a10 10 0 0 0 0-20z" fill="rgb(0,0,0)"/></svg>
        <p className='ml-0 mt-3'>Back</p>
        </Link>
  
  
    <div className="p-10 border border-black bg-red-400">
      <div className="text-center">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-5xl">
          Confirm to delete book
        </h1>
        <div className="my-4 flex items-center justify-center gap-x-3">
        <button
        onClick={handleDelete}
        type="button"
        className="rounded-md bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
      >
        Delete
      </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Delete