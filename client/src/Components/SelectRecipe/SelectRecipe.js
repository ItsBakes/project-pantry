import React from 'react'
import { Link } from 'react-router-dom'

function SelectRecipe({Results}) {

  return (
   
    <main>
         
        {Results?.map((result) => {
            return(
            <Link to={`/recipe/${result.id}`} key={result.id}><section >
                <img src={result.image}/>
                <div>{result.title}</div>
            </section></Link>
            )
        })}
    </main>
  )
}

export default SelectRecipe