import React from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';


function SingleRecipe() {

    const { id } = useParams();
    const baseURL = `https://api.spoonacular.com/recipes/`
    const endURL = `/information?apiKey=e30f520b19d44d4e957e41c694052f79`
    const [Recipe, setRecipe] = useState()


    useEffect(() => {
        const getRecipe = async () => {
            try {
                const response = await axios.get(`${baseURL}${id}${endURL}`)
                setRecipe(response.data)
                console.log(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        getRecipe();
    }, [])

    console.log(Recipe?.analyzedInstructions[0].steps)




    return (

        <main>
            <h2>{Recipe?.title}</h2>
            <img src={Recipe?.image} />
            <section>
                <article>
                    <h3>ingredients</h3>
                    <ul>
                        {Recipe?.extendedIngredients.map((ingredient) => {
                            return (
                            <li>
                                {ingredient.original}
                            </li>
                            )
                        })}
                    </ul>
                </article>
                <article>
                    <h3>instructions</h3>
                    <ol>
                        {Recipe?.analyzedInstructions[0].steps.map((step) => {
                            return (
                                <li>
                                    {step.step}
                                </li>
                            )
                        })}
                    </ol>
                </article>
            </section>
            <section>
                <Link to='/search'>search again</Link>
            </section>
        </main>
    )
}

export default SingleRecipe

// make sure to pick recipes that i know work for the demo. Keep it simple.