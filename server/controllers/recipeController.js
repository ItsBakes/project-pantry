const knex = require('knex')(require('../knexfile'));

// using index as var for all recipes
const index = async (_req, res) => {
    try {
        const data = await knex('recipes');
        res.status(200).json(data);
    } catch (err) {
        res.status(400).send(`Error retrieving recipes: ${err}`)
    }
}
const findOne = async (req, res) => {
    try {
        const recipesFound = await knex("recipes")
            .where({ id: req.params.id });

        if (recipesFound.length === 0) {
            return res.status(404).json({
                message: `recipe with ID ${req.params.id} not found`
            });
        }

        const recipeData = recipesFound[0];
        res.json(recipeData);
    } catch (error) {
        res.status(500).json({
            message: `Unable to retrieve recipe data for recipe with ID ${req.params.id}`,
        });
    }
};


module.exports = {
    index,
    findOne,
};