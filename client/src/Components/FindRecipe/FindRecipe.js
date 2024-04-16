import { useNavigate } from 'react-router-dom'
import './FindRecipe.scss'
import { useState } from 'react'
import axios from 'axios'


function FindRecipe({ setResults }) {

    const navigate = useNavigate();
    const [Search, setSearch] = useState("")
    const [Protein, setProtein] = useState("")
    const [Cuisine, setCuisine] = useState("")
    const [Diet, setDiet] = useState("")


    const searchURL = 'https://api.spoonacular.com/recipes/complexSearch'
    const ingredientsURL = 'https://api.spoonacular.com/recipes/findByIngredients'
    const apiKey = '&apiKey=e30f520b19d44d4e957e41c694052f79'

    const handleChange = (e) => {
        setSearch(e.target.value.replaceAll(" ", "+"))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(Search)
        console.log(Protein)
        console.log(Cuisine)
        console.log(Diet)
        if (Search) {
            try {
                const response = await axios.get(`${searchURL}?query=${Search}&number=6${apiKey}`)
                setResults(response.data.results)
                console.log(response.data.results)
                navigate('/recipes')

            }
            catch (error) {
                console.log(error)
            }
        } else if (Protein || Cuisine || Diet) {
            try {
                const response = await axios.get(`${ingredientsURL}?ingredients=${Protein}&type=${Cuisine}&diet=${Diet}&number=6${apiKey}`)
                console.log(response.data)
                setResults(response.data)
                navigate('/recipes')
            } catch (error) {
                console.log(error)
            }
        } else {
            alert(`please fill in the fields`)
        }

    }
    const empty = ``

    return (
        <main className='FindRecipe'>
            <form className='FindRecipe__form' onSubmit={handleSubmit}>
                <h3>search for recipes</h3>
                <label className='FindRecipe__label'>search recipes by ingredients:
                    <input type='search' id='search-r' placeholder='search ingredients' className='FindRecipe__input' onChange={handleChange}></input></label>
                <h3>or pick form what you have</h3>
                <label>protein: 
                    <select name='protein' id='protein-q' onChange={(e) => setProtein(e.target.value)}>
                        <option value={empty}>Please select an item</option>
                        <option value='chicken'>chicken</option>
                        <option value='beef'>beef</option>
                        <option value='pork'>pork</option>
                        <option value='fish'>fish</option>
                        <option value='vegan'>vegan</option>
                        <option value='vegetarian'>vegetarian</option>
                    </select></label>
                <label>style: 
                    <select name='type' id='cuisine-q' onChange={(e) => setCuisine(e.target.value)}>
                        <option value={empty}>Please select an item</option>
                        <option value='american'>american</option>
                        <option value='asian'>asian</option>
                        <option value='french'>french</option>
                        <option value='indian'>indian</option>
                        <option value='mediterranean'>mediterranean</option>
                        <option value='mexican'>mexican</option>
                        <option value='italian'>italian</option>
                    </select></label>
                <label>dietary restrictions: 
                    <select name='health' id='health-q' onChange={(e) => setDiet(e.target.value)}>
                        <option value={empty}>Please select an item</option>
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

