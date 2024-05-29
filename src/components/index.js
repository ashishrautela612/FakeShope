import React from 'react'
import Layout from './Layout';
import { Routes, Route } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Product from './Product';
import Cart from './Cart';
const Index = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
      </Routes>
    </div>
  )
}

export default Index;
