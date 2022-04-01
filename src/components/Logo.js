import React from 'react'

const Logo = () => {
  return (
    <div className="logo">
      {/* les images importées depuis la balise img sont accessibles dans "public" (fonctionne comme ci on était déjà dans le folder public) */}
      <img src="./logo192.png" alt="logo react" />
      <h3>React World</h3>
    </div>
  )
}

export default Logo
