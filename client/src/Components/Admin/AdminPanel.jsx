import React, { useState, useEffect } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { allUsers } from '../../store/db_info.slice.js'
import { allCharacters, allCategories, allRoles, allArticles } from '../../store/db_info.slice.js'
import { deleteUser } from '../../store/admin.user.slice.js'
import { deleteCharacter } from '../../store/admin.character.slice.js'
import { allowArticle } from '../../store/admin.article.slice.js'
import { Link } from 'react-router-dom'

function AdminPanel() {

    const { user, category, character, role, article } = useSelector((state) => state.db_info)
    const dispatch = useDispatch()
    const [validationStatus, setValidationStatus] = useState({})
    const [deletedCharacterIds, setDeletedCharacterIds] = useState([])

    const handleValidation = (id, validation) => {
        dispatch(allowArticle({id, validation}))
        // take the previous state and update the validation status for the article with the given id
        setValidationStatus(prevState => ({...prevState, [id]: validation}))
    }

    useEffect(() => {
        // Initialize validation status for each article
        const initialValidationStatus = {}
        // construit un objet avec les id des articles comme clé et leur validation comme valeur
        article.forEach(article => {
            initialValidationStatus[article.id] = article.isValidated
        })
        setValidationStatus(initialValidationStatus)
    }, [article])

    const handleUserDeletion = (id) => {
        dispatch(deleteUser(id))
    }

    const handleCharacterDelete = (id) => {
        dispatch(deleteCharacter(id))
        setDeletedCharacterIds(prevState => [...prevState, id])
    }

    useEffect(() => {
        dispatch(allUsers())
        dispatch(allCharacters())
        dispatch(allCategories())
        dispatch(allRoles())
        dispatch(allArticles())
    }, [])

  return (
    <main>
        <div className='data-list'>
        {user.map((data) => (
            <div key={data.id}>
                <h3>{data.name}</h3>
                <Link to={`/admin/utilisateur/${data.id}`}>Voir</Link>
                <button onClick={() => handleUserDeletion(data.id)}>Supprimer</button>
            </div>
        ))}
        </div>
        <div className='data-list'>
        {article.filter(a => !deletedCharacterIds.includes(a.character_id)).map((data) => {
            const articleCharacter = character.find((character) => character.id === data.character_id)
            return (
            <div key={data.id}>
                <h3>Dernière modification : {data.last_update}</h3>
                {articleCharacter && <h3>Article sur le personnage : {articleCharacter.name}</h3>}

                {validationStatus[data.id] === 0  ? 
                <button onClick={() => handleValidation(data.id, 1)}>Valider</button>
                : <button onClick={() => handleValidation(data.id, 0)}>Invalider</button>
            }
                {articleCharacter && (
                    <div>
                        <Link to={`/liste/${articleCharacter.id}`}>Voir</Link>
                        <Link to={`/admin/edit/personnage/${articleCharacter.id}`}>Modifier</Link>
                        <button onClick={() => handleCharacterDelete(articleCharacter.id)}>Supprimer</button>
                    </div>
                )}
        </div>)
        })}
        </div>
        {/* <div>
        {character.map((data) => (
            <div key={data.id}>
                <h3>{data.name}</h3>
                <Link to={`/admin/character/${data.id}`}>Voir</Link>
                <button>Modifier</button>
                <button>Supprimer</button>
            </div>
        ))}
        </div> */}
        <div className='data-list'>
        {category.map((data) => (
            <div key={data.id}>
                <h3>{data.label}</h3>
                <button>Ajouter une catégorie</button>
                <button>Modifier une catégorie</button>
                <button>Supprimer une catégorie</button>
            </div>
        ))}
        </div>
        <div className='data-list'>
        {role.map((data) => (
            <div key={data.id}>
                <h3>{data.role}</h3>
            </div>
        ))}
        <button>Ajouter un rôle</button>
        
        </div>
    </main>
  )
}

export default AdminPanel