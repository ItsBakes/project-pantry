import './FindRecipe.scss'

function FindRecipe() {
    return (
        <main className='FindRecipe'>
            <form className='FindRecipe__form'>
                <h3>search for recipes</h3>
                <label className='FindRecipe__label'>search recipes:
                    <input type='text' placeholder='search ingredients' className='FindRecipe__input'></input></label>
                <h3>or pick form what you have</h3>
                <label>meal
                    <select>
                        <option>breakfast</option>
                        <option>lunch</option>
                        <option>dinner</option>
                        <option>snack</option>
                    </select></label>
                <label>protein
                    <select>
                        <option>chicken</option>
                        <option>beef</option>
                        <option>pork</option>
                        <option>fish</option>
                        <option>vegan/vegetarian</option>
                    </select></label>
                <label>style
                    <select>
                        <option>american</option>
                        <option>asian</option>
                        <option>french</option>
                        <option>indian</option>
                        <option>mediterranean</option>
                        <option>mexican</option>
                        <option>italian</option>
                    </select></label>
                <label>dietary restrictions
                    <select>
                        <option>dairy-free</option>
                        <option>fish-free</option>
                        <option>gluten-free</option>
                        <option>peanut-free</option>
                        <option>pescatarian</option>
                        <option>vegan</option>
                        <option>vegetarian</option>
                    </select></label>
                    <button type='submit'>let's get cooking!</button>



            </form>
        </main>
    )
}

export default FindRecipe;

// lucid react - icon library that you can install within react
// font awesome