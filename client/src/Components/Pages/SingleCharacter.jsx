import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { listOneCharacter } from '../../store/character.slice.js'

function SingleCharacter() {
    const param = useParams()
    const dispatch = useDispatch()
    const { isLoading, characters } = useSelector((state) => state.characters)

    useEffect(() => {
        dispatch(listOneCharacter(param.id))
    }, [])

    console.log(characters)

    return (
        <main>
            {characters.map((data) => (
                <div key={data.id}>
                    <h1>{data.name}</h1>
                    <h3>Personnage de {data.label}</h3>
                    <h4>Ajouter par {data.author} le {data.publish_date}</h4>
                    <h5>Dernière modification le {data.last_update}</h5>
                    <img className="card-img" src={`http://localhost:3000/src/assets/img/${data.src}`} alt={data.alt} />
                    <p>{data.description}</p>
                </div>
            ))}
        </main>
    )
}

export default SingleCharacter