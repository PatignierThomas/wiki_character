import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, updateUser } from '../../store/admin.user.slice'

function UserInfo() {
    const param = useParams()
    const { user } = useSelector((state) => state.adminUser)
    const dispatch = useDispatch()

    const [formValues, setFormValues] = useState({ name: '', email: '', role: '' });

    useEffect(() => {
        dispatch(getUser(param.id))
    }, [])

    useEffect(() => {
        setFormValues({
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role_id
        })
    }, [user])

    const handleChange = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(updateUser(formValues))
    }
    
    return (
        <main>
            <div className='update'>
                <h1>Update</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={formValues.name} onChange={handleChange} />
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={formValues.email} onChange={handleChange} />
                    <label htmlFor="role">Role</label>
                    <input type="text" id="role" name="role" value={formValues.role} onChange={handleChange} />
                    <button type="submit">send</button>
                </form>
            </div>
        </main>
    )
}

export default UserInfo