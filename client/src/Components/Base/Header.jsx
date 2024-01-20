import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { logoutAccount } from '../../store/auth.slice.js'

function Header() {
    const { isLogged } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logoutAccount())
    }

  return (
    <header>
        <nav>
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/liste">Liste des personnages</Link></li>
                <li><Link to="/article/create">Créer un personnage</Link></li>
                <li><Link to="/auth/creation-de-compte">Créer un compte</Link></li>
                {isLogged ? 
                <li><button onClick={handleLogout}>Se déconnecter</button></li> : 
                <li><Link to="/auth/connexion">Se connecter</Link></li>
                }
                <li><Link to="/admin">Admin</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header