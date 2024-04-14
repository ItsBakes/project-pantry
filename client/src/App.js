import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import RecipeFindPage from "./pages/RecipeFindPage";
import HomePage from "./pages/HomePage";
import RecipeSelect from './pages/RecipeSelect';
import SingleRecipePage from './pages/SingleRecipePage';


function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/find" element={<RecipeFindPage/>}/>
      <Route path="/recipes" element={<RecipeSelect/>}/>
      <Route path="/recipe/:id" element={<SingleRecipePage />} />      
      </Routes>      
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
