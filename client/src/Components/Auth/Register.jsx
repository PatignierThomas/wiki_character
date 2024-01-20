import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { registerAccount } from '../../store/auth.slice.js'

function Register() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { error, isLoading, sucess } = useSelector((state) => state.auth)

    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch(registerAccount({
            name: event.target.name.value,
            password: event.target.password.value
        }));
    }

    useEffect(() => {
        console.log(sucess, isLoading, error)
        if (sucess && !isLoading && !error) {
            navigate('/auth/connexion');
        }
    }, [sucess]);

  return (
    <main>
        {error && <p className='error'>{error}</p>}
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="password">Mot de passe</label>
            <input type="password" id="password" name="password" />
            <button type="submit">Envoyer</button>
        </form>
    </main>
    )
}

export default Register