import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { listRecentCharacters } from '../../store/character.slice.js'
import { allCategories } from '../../store/db_info.slice.js'
import { Link } from 'react-router-dom'

function Home() {
    const {username, isLogged} = useSelector((state) => state.auth)
    const { characters } = useSelector((state) => state.characters)
    const { category } = useSelector((state) => state.db_info)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listRecentCharacters())
    }, [])

    // useEffect(() => {
    //     dispatch(allCategories())
    // }, [])

  return (
    <main>
        <h1>Bienvenue sur wiki-liste !</h1>
        {/* {category.map ((data) => (
            <div key={data.id}>
                <h3>{data.label}</h3>
            </div>
        ))} */}

        {isLogged ? <p>Vous êtes connecté</p> : <p>Vous n'êtes pas connecté</p>}
        <h2>Personnage récement ajouté :</h2>
        {characters.map((data) => (
            <div key={data.id} className='card'>
                <img className="card-img" src={`http://localhost:3000/src/assets/img/${data.src}`} alt={data.alt} />
                <div className='content'>
                    <h3>{data.name}</h3>
                    <p className="croped">{data.description}</p>
                    <Link to={`/liste/${data.id}`}>Voir plus</Link>
                </div>
            </div>
        ))}

    </main>
  )
}

export default Home