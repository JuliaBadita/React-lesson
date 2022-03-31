import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* path="/" le / = la home page */}
        <Route path="/" element={<Home />} />

        {/* path => chemin que l'on voit dans l'url, ex : /about => quand il y a about
    dans l'url ici on va chercher le composant (élément <About />) */}
        <Route path="/about" element={<About />} />

        {/* path='*' fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
