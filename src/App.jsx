import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Price from './pages/price'
import Blog from './pages/blog'
import Menubar from './components/menubar'
import Footer from './components/Footer'
import Contact from './pages/contact'
import About from './pages/about'
import Error from './pages/error'
import BlogPage from './pages/blogPage'

export default function App() {
  return (
    <BrowserRouter>
        <header className='sticky mx-auto top-6 w-full left-auto md:w-3/4'>
            <Menubar/>
        </header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/price' element={<Price/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/error' element={<Error/>}/>
        <Route path='/blogpage' element={<BlogPage/>}/>
      </Routes>
      
      <Footer/>
    </BrowserRouter>
  )
}
