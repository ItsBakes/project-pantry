import React from 'react'
import { Link } from 'react-router-dom'
import './SelectRecipe.scss'

function SelectRecipe({ Results }) {

  return (

    <main className='SelectRecipe'>
      <h2 className='SelectRecipe__h2'>Select a Recipe</h2>
      <article className='SelectRecipe__container'>
        {Results?.map((result) => {
          return (
            <Link className='SelectRecipe__link' to={`/recipe/${result.id}`} key={result.id}><section className='SelectRecipe__card' >
              <img className='SelectRecipe__image' src={result.image} />
              <div className='SelectRecipe__title'>{result.title}</div>
            </section></Link>
          )
        })}
      </article>
    </main>
  )
}

export default SelectRecipe