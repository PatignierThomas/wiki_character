import React , { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createCharacter } from '../../store/crud.slice.js'
import { allCategories } from '../../store/db_info.slice.js';

function CreateArticle() {

    const { username } = useSelector((state) => state.auth);
    const { category } = useSelector((state) => state.db_info);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(allCategories())
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        const fields = ['name', 'description', 'alt', 'image', 'category'];

        // check if field is "image", if so, get the first file from the input
        // else, get the value from the input (text, textarea, select, etc.)
        fields.forEach(field => {
            const value = field === 'image' ? event.target[field].files[0] : event.target[field].value;
            formData.append(field, value);
        });
        formData.append('username', username);
        dispatch(createCharacter(formData));
      }

  return (
    <main>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <label htmlFor="name">Nom du personnage</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="description">Description du personnage</label>
            <textarea name="description" id="description"></textarea>
            <label htmlFor="image">Image du personnage</label>
            <input type="file" id="image" name="image" />
            <label htmlFor="alt">Description de l'image : (texte qui s'affichera si l'image est indisponible)</label>
            <input type="text" id="alt" name="alt" />
            <label htmlFor="category">Catégorie du personnage</label>
            <select name="category" id="category">
                {category.map((data) => (
                    <option key={data.id} value={data.id}>{data.label}</option>
                ))}
            </select>

            <button type="submit">Créer un nouveau personnage</button>
        </form>
    </main>
  )
}

export default CreateArticle