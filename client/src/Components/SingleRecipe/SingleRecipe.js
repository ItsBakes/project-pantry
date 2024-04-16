import React from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import "./SingleRecipe.scss"


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

        <main className='SingleRecipe'>
            <h2 className='SingleRecipe__title'>{Recipe?.title}</h2>
            <img className='SingleRecipe__image' src={Recipe?.image} />
            <section className='SingleRecipe__section'>
                <article className='SingleRecipe__ingredients--container'>
                    <h3 className='SingleRecipe__ingredients'>ingredients</h3>
                    <ul className='SingleRecipe__ingredients--list'>
                        {Recipe?.extendedIngredients.map((ingredient) => {
                            return (
                            <li className='SingleRecipe__ingredients--item'>
                                {ingredient.original}
                            </li>
                            )
                        })}
                    </ul>
                </article>
                <article className='SingleRecipe__instructions--container'>
                    <h3 className='SingleRecipe__instructions'>instructions</h3>
                    <ol className='SingleRecipe__instructions--list'>
                        {Recipe?.analyzedInstructions[0].steps.map((step) => {
                            return (
                                <li className='SingleRecipe__instructions--item'>
                                    {step.step}
                                </li>
                            )
                        })}
                    </ol>
                </article>
            </section>
        </main>
    )
}

export default SingleRecipe

