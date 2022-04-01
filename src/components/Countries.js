import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card'

// useEffect et useState = des hooks en React
const Countries = () => {
  // on crée la variable date et la seule façon de pouvoir la modifier = en passant par le setData
  // on déclare que c'est un useState, tout comme le useEffect il faut le déclarer en faut dans l'import
  const [data, setData] = useState([])

  // on définit la variable rangeValue > pour changer la valeur de ce chiffre qu'on va couper (.slice) c'est avec setRangeValue c'est un useState
  // pour la définir il est bien d'utiliser des multiples de 12 (c'est mieux visuelement)
  const [rangeValue, setRangeValue] = useState(36)

  const radios = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']

  // Le useEffect se joue lorsque le composant est monté (quand on l'appelle en gros)
  useEffect(() => {
    //   On lui dit va me chercher ce qu'il y a dans le lien et ensuite affiche le moi
    // + cela tranforme le fichier JSON en JavaScript exploitable
    // Dans setData on défini le resData donc les 250 pays qui sont ajouter au useState (on peut le constater ans le dev tool dans components)
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((res) => setData(res.data))

    // les [] = le callback il peut être rappelé si jamais qq chose se passe dedans
  }, [])

  return (
    <div className="countries">
      <ul className="radio-container">
        {/* il est préférable d'écrire defaultValue plutôt que value, car le premier permet de modifier le nombre de pays contrairement au deuxième)
          defaultValue = la valeur par défaut >> il démarre à rangeValue ensuite avec un évènement (ici onChange) on lui demande de modifier la valeur de rangeValue*/}
        <input
          type="range"
          min="1"
          max="250"
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />

        {/* on va mapper les radios  */}
        {radios.map((continent) => (
          <li>
            {/* avec le name="continentRadio" */}
            <input type="radio" id={continent} name="continentRadio" />
            <label htmlFor={continent}>{continent}</label>
          </li>
        ))}
      </ul>
      <ul>
        {/*  on lui dit comment appeler chaque élément individuellement :
           appelle un country, => ce qu'il va faire de chacun de ces élements/country = créer un li 
           le .slice(0,rangeValue) = valeur dynamique du nombre de pays qu'on veut afficher*/}

        {data.slice(0, rangeValue).map((country, index) => (
          // (((((dans le li : on regarde la console dans components pour voir comment les lister : {countries.translations.fra.common} pour les appeler :
          // dans components on va dans countries ensuite dans la cat translations pour la langue, ensuite la cat fra = on la choisit pour les pays en fr et la cat common = là où sont écrit le nom de pays
          // <li key={index}>{country.translations.fra.common}</li>))))))

          //  On doit leur créer une clé unique à chacun donc avec index cela va compter 0, 1, 2 jusqu'à 250 donc chaque pays aura une clé unique qui sera son numéro
          // maintenant avec la clé index cela apparait quand on va dans components > countries
          // + on lui dit de recupérer country
          <Card key={index} country={country} />
        ))}
      </ul>
    </div>
  )
}

export default Countries
