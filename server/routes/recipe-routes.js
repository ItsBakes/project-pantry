const router = require("express").Router();
const recipeController = require("../controllers/recipeController");


//routes for main path - querying all recipes
router
    .route('/')
    .get(recipeController.index)
    .post(recipeController.add);

router
    .route('/recipe/:id')
    .get(recipeController.findOne)
    .put(recipeController.update)
    .delete(recipeController.remove)

module.exports = router