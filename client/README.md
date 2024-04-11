# Project Title

Project Pantry 

## Overview

Project pantry aims to help those who have any dietary restrictions, or not, decide what to eat. 

### Problem

 There are many people who are diagonosed with an illness that a change in diet is required or encouraged. Project Pantry aims to help those who are going through these changes. Rather than having a discovery period where food is lacking in flavor, Project pantry wants to take out all the searching a user has to do. Even if you dont have dietary restrictions but you're not gifted like those who can look at a fridge full of condiments and somehow generate a 4 course meal, Project Pantry aims to help you.

### User Profile

- Anyone with a dietary restriction:
    - still wanting flavor
    - not wanting to google everything

- Anyone who can't decide what to eat

### Features

- As a user, I want to be able to select a dietary restriction and receive 1-3 recipes to make that follow the restrictions

- As a logged in user, I want to be able to select dishes that have different time frames for prep/cook time
- As a logged in user, I want to be able to select a dish that can be made in one pan to reduce the dishes afterwards.
- As a logged in user, I want to be able to save a recipe that sounds good for later, or made and want to remake later.
- filters - dietary restrictions, protein, veggies, carbs. 


## Implementation

### Tech Stack

- React
- MySQL
- Express, CORS
- Client Libraries: 
    - react
    - react-router
    - axios
- Server Libraries
    - knex
    - express


### APIs

- researching - reach out to michael and Kurt about how they did their api during the pair programming

### Sitemap

- Home 
- What are you feeling? - protein, veggie, timefram, 
- Recipe - comments and ratings
- Register
- Login


### Mockups

Provide visuals of your app's screens. You can use tools like Figma or pictures of hand-drawn sketches.

### Data

Describe your data and the relationships between them. You can show this visually using diagrams, or write it out. 

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

### Auth

Does your project include any login or user profile functionality? If so, describe how authentication/authorization will be implemented.

## Roadmap

- Create Client
    - react project with routes and skeletonized pages
- Create Server
    - add express and routes with placeholder responses
    - add skeletonized path pages
- Create Migrations
- Find API 
- Create Seeds with user comments, likes, saved recipes
- Deploy Client and server projects so all commits will be reflected in prod. 

- Feature: Filters
    - restrictions
    - cook/prep time
- Feature: Calorie tracker
- Feature: Comment/rating
- Feature: Home Page
- Feature: Login
    - Login Page + Form validation
    - create post request /users/login 
- Feature: Register/Create account
    - Register page + Form
    - Post Request /users/register endpoint
- Feature: Implement JWT tokens
    - Server: update expected req/res on projected endpoints
    - Client: Store JWT tokens in local storage, include on axios calls. 

- Bug Fixes
- Demo

## Nice-to-haves

- Calorie Tracker - reach out to kam about this
- Forgot Password functionality
- Item scanner for shopping lists / dietary information
- Add a recipe / substitution possibilites
- Add login page and create user page.
- Create Rating System 
    - prep
    - time
    - clean up
    - taste
    - overall


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
