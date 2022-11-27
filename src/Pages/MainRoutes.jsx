import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Books from './Books'
import EditBooks from './EditBooks'
import Login from './Login'
import SingleBooks from './SingleBooks'
const MainRoutes = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Books />} />
  <Route path="/books/:id" element={<SingleBooks />} />
  <Route path="/books/:id/edit" element={<EditBooks />} />
  <Route path="/login" element={<Login />} />
  <Route path="*" element={<h3>Page Not Found</h3>} />
  </Routes>
    </div>
  )
}

export default MainRoutes
