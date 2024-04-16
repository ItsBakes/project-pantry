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
        if (Search) {
            try {
                const response = await axios.get(`${searchURL}?query=${Search}&number=6${apiKey}`)
                setResults(response.data.results)
                navigate('/recipes')

            }
            catch (error) {
                console.log(error)
            }
        } else if (Protein || Cuisine || Diet) {
            try {
                const response = await axios.get(`${ingredientsURL}?ingredients=${Protein}&type=${Cuisine}&diet=${Diet}&number=6${apiKey}`)
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
                <h3  className='FindRecipe__h3'>search for recipes</h3>
                <label className='FindRecipe__label'>search recipes by ingredients:
                    <input type='search' id='search-r' placeholder='search ingredients' className='FindRecipe__input' onChange={handleChange}></input></label>
                <h3 className='FindRecipe__h3'>or pick from what you have</h3>
                <label className='FindRecipe__label'>protein: 
                    <select className='FindRecipe__select' name='protein' id='protein-q' onChange={(e) => setProtein(e.target.value)}>
                        <option  className='FindRecipe__option' value={empty}>Please select an item</option>
                        <option  className='FindRecipe__option' value='Chicken'>Chicken</option>
                        <option  className='FindRecipe__option' value='Beef'>Beef</option>
                        <option  className='FindRecipe__option' value='Pork'>Pork</option>
                        <option  className='FindRecipe__option' value='Fish'>Fish</option>
                        <option  className='FindRecipe__option' value='Vegan'>Vegan</option>
                        <option  className='FindRecipe__option' value='Vegetarian'>Vegetarian</option>
                    </select></label>
                <label className='FindRecipe__label'>style: 
                    <select className='FindRecipe__select' name='type' id='cuisine-q' onChange={(e) => setCuisine(e.target.value)}>
                        <option  className='FindRecipe__option' value={empty}>Please select an item</option>
                        <option  className='FindRecipe__option' value='American'>American</option>
                        <option  className='FindRecipe__option' value='Asian'>Asian</option>
                        <option  className='FindRecipe__option' value='French'>French</option>
                        <option  className='FindRecipe__option' value='Indian'>Indian</option>
                        <option  className='FindRecipe__option' value='Mediterranean'>Mediterranean</option>
                        <option  className='FindRecipe__option' value='Mexican'>Mexican</option>
                        <option  className='FindRecipe__option' value='Italian'>Otalian</option>
                    </select></label>
                <label className='FindRecipe__label'>dietary restrictions: 
                    <select className='FindRecipe__select' name='health' id='health-q' onChange={(e) => setDiet(e.target.value)}>
                        <option  className='FindRecipe__option' value={empty}>Please select an item</option>
                        <option  className='FindRecipe__option' value='Gluten-Free'>Gluten-Free</option>
                        <option  className='FindRecipe__option' value='Paleo'>Paleo</option>
                        <option  className='FindRecipe__option' value='Pescatarian'>Pescatarian</option>
                        <option  className='FindRecipe__option' value='Vegan'>Vegan</option>
                        <option  className='FindRecipe__option' value='Vegetarian'>Vegetarian</option>
                    </select></label>
                <button className='FindRecipe__button' type='submit'>let's get cooking!</button>
            </form>
        </main>
    )
}

export default FindRecipe;

