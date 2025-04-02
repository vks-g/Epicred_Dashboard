
import Login from "./screens/ElementLandingPage/sections/HeaderSection/Login";
import Signin from "./screens/ElementLandingPage/sections/HeaderSection/Signin";
import { ElementLandingPage } from "./screens/ElementLandingPage";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Home from './pages/Home'

// Removed Toaster import
function App() {
  return (
   <BrowserRouter>

   <Routes>
   <Route path="/" element={<ElementLandingPage />} />
  
   <Route path="/login" element={<Login />} />

   <Route path="/signin" element={<Signin />} />
   
   </Routes>
   {/* Removed Toaster component */}

   </BrowserRouter>
  )
}
export default App