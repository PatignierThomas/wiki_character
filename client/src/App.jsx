import { useState } from 'react'
import Header from './Components/Base/Header'
import Footer from './Components/Base/Footer'
import Router from './Router.jsx'
import './assets/style/css/index.css'

function App() {

  return (
    <>
        <Header/>
        <Router />
        <Footer/>
    </>
  )
}

export default App
