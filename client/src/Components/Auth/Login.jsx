import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { loginAccount } from '../../store/auth.slice.js'
import { useDispatch, useSelector } from 'react-redux';

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {sucess, error} = useSelector((state) => state.auth)

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(loginAccount({
            name: event.target.name.value,
            password: event.target.password.value
        }));
        navigate('/')
      }

  return (
    <main>
        {/* {error && <p>{error}</p>} */}
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nom d'utilisateur</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="password">Mot de passe</label>
            <input type="password" id="password" name="password" />
            <button type="submit">Envoyer</button>
            <Link to='/auth/creation-de-compte'>Pas encore inscrit ?</Link>
        </form>


    </main>
  )
}

export default Login