import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import RecipeFindPage from "./pages/RecipeFindPage";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/find" element={<RecipeFindPage/>}/>
      <Route />



      
      </Routes>      
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
