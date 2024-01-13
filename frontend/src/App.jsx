import { useState } from 'react'
import './App.css'
import Books from './Pages/Books'
import {Routes, Route} from 'react-router-dom'
import AddBook from './Pages/AddBook'
import EditBook from './Pages/EditBook'
import ShowBook from './Pages/ShowBook'
import Delete from './Pages/Delete'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Books/>}/>
        <Route path='/addbook' element={<AddBook/>}/>
        <Route path='/editbook/:id' element={<EditBook/>}/>
        <Route path='/book/:id' element={<ShowBook/>}/>
        <Route path='/delete/:id' element={<Delete/>}/>
      </Routes>
      
    </div>
  )
}

export default App
