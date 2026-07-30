import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Footer from "./components/footer"

import './App.css'
import { Menu } from "./components/Restaurant/Menu"

function App() {


  return (
    <>
    <div className="max-w-310 mx-auto">
      <div className="relative">
          <h1 className="relative mt-20 font-bold text-5xl text-center">
          Today's Menu
          </h1>

          <div className="absolute -bottom-6 left-[35%] z-10 h-2 w-100 bg-amber-400 " />
</div>

    <Menu/>
    </div>
    </>
  )
}

export default App
