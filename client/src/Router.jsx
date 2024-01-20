import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Profiler } from 'react'
import Home from './Components/Pages/Home.jsx'
import AllCharactersList from './Components/Pages/AllCharactersList.jsx'
import SingleCharacter from './Components/Pages/SingleCharacter.jsx'
import Register from './Components/Auth/Register.jsx'
import Login from './Components/Auth/Login.jsx'
import CreateArticle from './Components/Crud/CreateArticle.jsx'
import AdminPanel from './Components/Admin/AdminPanel.jsx'
import EditCharacter from './Components/Admin/EditCharacter.jsx'
import UserInfo from './Components/Admin/UserInfo.jsx'
import Error_404 from './Components/Pages/Error_404.jsx'

function Router() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/liste" element={<AllCharactersList />} />
        <Route path="/liste/:id" element={<SingleCharacter />} />
        <Route path="/auth/creation-de-compte" element={<Register />} />
        <Route path="/auth/connexion" element={<Login />} />
        <Route path="/article/create" element={<CreateArticle />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/admin/utilisateur/:id" element={<UserInfo />} />
        <Route path="/admin/edit/personnage/:id" element={<EditCharacter />} />
        <Route path="*" element={<Error_404 />} />
    </Routes>

  )
}

export default Router