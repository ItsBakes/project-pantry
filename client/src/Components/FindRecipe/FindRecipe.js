import { Link } from 'react-router-dom'
import './FindRecipe.scss'
import { useState } from 'react'
import axios from 'axios'


function FindRecipe() {

    const [Search, setSearch] = useState("")
    const [Protein, setProtein] = useState("")
    const [Cuisine, setCuisine] = useState("")
    const [Diet, setDiet] = useState("")
    const [Results, setResults] = useState([])
    
    const searchURL = 'https://api.spoonacular.com/recipes/complexSearch'
    const ingredientsURL = 'https://api.spoonacular.com/recipes/findByIngredients'
    const apiKey = '&apiKey=e30f520b19d44d4e957e41c694052f79'

    const searchEl = document.querySelector('#search-r')
    const proteinEl = document.querySelector(`#protein-q`)
    const cuisineEl = document.querySelector(`#cuisine-q`)
    const healthEl = document.querySelector(`#health-q`)
    // https://api.spoonacular.com/recipes/complexSearch
    // ?query=pasta
    // &maxFat=25
    // &number=6
    // &type=
    // &apiKey=e30f520b19d44d4e957e41c694052f79

    // https://api.spoonacular.com/recipes/findByIngredients
    // ?ingredients=apples,+flour,+sugar
    // &number=2 - number of items to return 0-100

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (searchEl.value === true) {
        try {
            const response = await axios.get(`${searchURL}?query=${searchEl.value}&number=6${apiKey}`)
            console.log(response.data.results)
            setResults(response.data.results)
        }
        catch (error){
            console.log(error)
        }
    } else if (Protein === true || Cuisine === true || Diet === true ) {
        try {
            const response = await axios.get(`${ingredientsURL}?ingredients=${Protein}&type=${Cuisine}&diet=${Diet}${apiKey}`)
            setResults(response.data.results)
        } catch (error) {
            console.log(error)
        }
    } else {
        alert (`please fill in the fields`)
    }
    }

    return (
        <main className='FindRecipe'>
            <form className='FindRecipe__form' onSubmit={handleSubmit}>
                <h3>search for recipes</h3>
                <label className='FindRecipe__label'>search recipes by ingredients:
                    <input type='search' id='search-r' placeholder='search ingredients' className='FindRecipe__input'></input></label>
                <h3>or pick form what you have</h3>
                <label>protein
                    <select name='protein' id='protein-q' onChange={(e) => setProtein(e.target.value)}>
                        <option value='chicken'>chicken</option>
                        <option value='beef'>beef</option>
                        <option value='pork'>pork</option>
                        <option value='fish'>fish</option>
                        <option value='vegan'>vegan</option>
                        <option value='vegetarian'>vegetarian</option>
                    </select></label>
                <label>style
                    <select name='cuisineType' id='cuisine-q' onChange={(e) => setCuisine(e.target.value)}>
                        <option value='american'>american</option>
                        <option value='asian'>asian</option>
                        <option value='french'>french</option>
                        <option value='indian'>indian</option>
                        <option value='mediterranean'>mediterranean</option>
                        <option value='mexican'>mexican</option>
                        <option value='italian'>italian</option>
                    </select></label>
                <label>dietary restrictions
                    <select name='health' id='health-q' onChange={(e) => setDiet(e.target.value)}>
                        <option value='gluten-free'>gluten-free</option>
                        <option value='paleo'>paleo</option>
                        <option value='pescatarian'>pescatarian</option>
                        <option value='vegan'>vegan</option>
                        <option value='vegetarian'>vegetarian</option>
                    </select></label>
                <button type='submit'>let's get cooking!</button>
            </form>
        </main>
    )
}

export default FindRecipe;

// lucid react - icon library that you can install within react
// font awesome