import React from 'react'

//
const Card = ({ country }) => {
  return (
    <li className="card">
      {/* en les appelant comme ça, cela permet d'afficher le svg des payes en question (que l'on a défini dans la const Card) 
      Ce sont toutes des données dynamiques que l'on appelle dans les {country. ....}*/}
      <img
        src={country.flags.svg}
        // avec cette manière d'écrire le alt, on lui dit de chercher le nom du pays dans countries > translations > fra > common (dans le dév tools partie components)
        // on laisse un espace à la fin de 'drapeau ' afin que cela laisse un espace entre lui + le nom du pays
        alt={'drapeau ' + country.translations.fra.common}
      />
      <div className="infos">
        {/* pour afficher le nom du pays (ici en hover) même principe que juste au dessus : */}
        <h2>{country.translations.fra.common}</h2>

        {/* même principe ici pour la capitale on la retrouve dans la base de données dans components > countries > hooks : State > capital*/}
        <h4>{country.capital}</h4>

        {/* ici le .toLocaleString() => séparateur de millier >>> au lieu de 3473727 cela donne 3 473 727 */}
        <p>Pop. {country.population.toLocaleString()}</p>
      </div>
    </li>
  )
}

export default Card
