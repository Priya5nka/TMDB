import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header, Footer } from './components' 
import AllRoutes from './routes/AllRoutes'

function App() {

  return (
    <>
      <Header/>
      <AllRoutes/>
      <Footer/>
    </>
  )
}

export default App
