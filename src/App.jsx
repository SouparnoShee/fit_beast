import Header from "./components/header"
import Home from "./pages/home"
import "./custom.css"
import Footer from "./components/footer"
import { Routes, Route } from "react-router-dom"
import Bmr from "./pages/bmr"
import Bodypart from "./pages/bodypart"
import Equipment from "./pages/equipment"
import Target from "./pages/target"
import { Toaster } from "react-hot-toast"




function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bmr" element={<Bmr />} />
        <Route path="/bodypart" element={<Bodypart />} />
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/target" element={<Target />} />
      </Routes>
      <Footer />
      <Toaster />
    </>
  )
}

export default App
