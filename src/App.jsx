import React from "react"
import Navbar from "./sections/Navbar"
import Hero from "./sections/Hero"

const App = () => {
  return (
    
    <main className="max-w-7xl mx-auto">
      <Navbar className="text-white"/>
      <Hero />
    </main>
  )
}
export default App