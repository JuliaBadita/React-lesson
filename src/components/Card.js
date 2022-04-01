import React from 'react'

//
const Card = ({ country }) => {
  return (
    <li className="card">
      {/* en les appelant comme ça, cela permet d'afficher le svg des payes en question (que l'on a défini dans la const Card) */}
      <img
        src={country.flags.svg}
        // avec cette manière d'écrire le alt, on lui dit de chercher le nom du pays dans countries > translations > fra > common (dans le dév tools partie components)
        // on laisse un espace à la fin de 'drapeau ' afin que cela laisse un espace entre lui + le nom du pays
        alt={'drapeau ' + country.translations.fra.common}
      />
      <div className="infos">
        <h2>Nom du pays</h2>
      </div>
    </li>
  )
}

export default Card
