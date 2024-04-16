const express = require('express');
const app = express();
require("dotenv").config();
const cors = require("cors");


const PORT = process.env.PORT || 8080;

app.use(cors());

app.use(express.json());

// query 
const recipeRoutes = require('./routes/recipe-routes');
app.use('/', recipeRoutes)


app.use((req, res, next) => {
    next();
});

app.listen(PORT, () => {
}); 