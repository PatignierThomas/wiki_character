import React , { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createCharacter } from '../../store/crud.slice.js'
import { allCategories } from '../../store/db_info.slice.js';
import { listOneCharacter } from '../../store/character.slice.js';
import { modifyCharacters, modifyCharactersImage } from '../../store/admin.character.slice.js';
import { useParams } from 'react-router-dom';

function EditCharacter() {
    
    const [formValues, setFormValues] = useState({ name: '', description: '', category: '', alt: '' });
    const param = useParams()

    const { characters } = useSelector((state) => state.characters)
    const [character] = characters

    const { username } = useSelector((state) => state.auth);

    const { category } = useSelector((state) => state.db_info);
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(allCategories())
        dispatch(listOneCharacter(param.id))
    }, [])

    useEffect(() => {
        character && setFormValues({
            name: character.name,
            description: character.description,
            category: character.label,
            alt: character.alt
        });
    }, [character])

    const handleChange = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(modifyCharacters({
            id: param.id,
            newCharacterInfo: {
                username: username,
                name: formValues.name, 
                description: formValues.description,
                category: formValues.category
            }
        })
        )
    }

    const handleSubmitImage = (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append('image', event.target.image.files[0])
        formData.append('alt', event.target.alt.value)
        dispatch(modifyCharactersImage({
            id: param.id,
            newCharacterImage: formData
            }
        ))
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={formValues.name} onChange={handleChange}/>
        <label htmlFor="description">Description du personnage</label>
        <textarea name="description" id="description" cols="30" rows="10" value={formValues.description} onChange={handleChange}></textarea>
        <label htmlFor="category">Catégorie du personnage</label>
        <select name="category" id="category" value={formValues.category} onChange={handleChange}>
            {category.map((data) => (
                <option key={data.id} value={data.label}>{data.label}</option>
            ))}
        </select>

        <button type="submit">Modifier le personnage</button>
    </form>

    <form onSubmit={handleSubmitImage} encType="multipart/form-data">
        <label htmlFor="image">Image du personnage</label>
        <input type="file" id="image" name="image" />
        <label htmlFor="alt">Description de l'image</label>
        <input type="text" id="alt" name="alt" value={formValues.alt} onChange={handleChange}/>

        <button type="submit">Modifier l'image du personnage</button>
    </form>
    </>
  )
}

export default EditCharacter