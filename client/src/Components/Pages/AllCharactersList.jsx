import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { listAllCharacters } from '../../store/character.slice.js'
import { Link } from 'react-router-dom'

function AllCharactersList() {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const { characters } = useSelector((state) => state.characters)

    useEffect(() => {
        dispatch(listAllCharacters())
    }, [])
    const filteredCharacter = characters.filter(character => character.name.includes(search) && character.isValidated === 1)
    
  return (
    <main>
        <input type='text' placeholder='Search...' onChange={(e) => setSearch(e.target.value)}></input>
        {filteredCharacter.map((data) => ( 
            <div key={data.id}className='card'>
                <img className="card-img" src={`http://localhost:3000/src/assets/img/${data.src}`} alt={data.alt} />
                <div className='content'>
                    <h3>{data.name}</h3>
                    <p>{data.description}</p>
                    <Link to={`/liste/${data.id}`}>Voir plus</Link>
                </div>
            </div>
            ))
        }
    </main>
  )
}

export default AllCharactersList