import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const ShowBook = () => {
    const [data, setData] = useState([]);
    const {id} = useParams();
    useEffect(()=>{
        axios.get(`/api/book/${id}`)
        .then(res => setData(res.data))
        .catch(err=> console.log(err));
    },[])
  return (
    <>
    
        <Link 
        to="/"
        className='flex'>
        <svg width="50px" height="50px" id="Layer_1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m351.79 246h-170.46l56-56a10 10 0 0 0 -14.15-14.14l-67.86 67.86a17.31 17.31 0 0 0 0 24.48l67.86 67.86a10 10 0 0 0 14.11-14.06l-56-56h170.5a10 10 0 0 0 0-20z" fill="rgb(0,0,0)"/></svg>
        <p className='ml-0 mt-3'>Back</p>
        </Link>
       
    
        <div style={{width:"600px"}} className="mx-auto max-w-xl rounded-md bg-black p-1">
          <div className="flex flex-col rounded-md bg-white">
            <div className="flex flex-1 flex-col justify-between p-8">
              <div className="mb-4 flex space-x-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6 text-yellow-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                ))}
              </div>
              <div className="flex-1 pt-2">
                <blockquote>
                  <p className="text-lg text-gray-800 font-bold">
                    Book Name
                  </p>
                  <p className="text-lg text-gray-800">
                   "{data.title}"
                  </p>
                </blockquote>
              </div>
    
              <div className="mt-8 border-t border-gray-300 pt-4 dark:border-gray-800">
                <div className="flex items-center">
                  <img
                    className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                    alt=""
                  />
                  <div className="ml-3 min-w-0">
                    <p className="truncate text-base font-semibold text-gray-800">Author</p>
                    <p className="truncate text-base text-gray-500">{data.author}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
   
    
  )
}

export default ShowBook