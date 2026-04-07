import { useState, useEffect } from 'react'
import axios from 'axios'

const InsertList = ({ setList, editItem, setEditItem, API }) => {
    const [title, setTitle] = useState('')

    useEffect(() => {
        if (editItem) {
            setTitle(editItem.title)
        }
    }, [editItem])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!title.trim()) return

        try {
            if (editItem) {
                const res = await axios.put(`${API}/${editItem._id}`, {
                    title
                })

                setList((prev) =>
                    prev.map((item) =>
                        item._id === editItem._id ? res.data : item
                    )
                )

                setEditItem(null)
            } else {
                const res = await axios.post(API, { title })
                setList((prev) => [...prev, res.data])
            }

            setTitle('')
        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter list"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit">
                {editItem ? "Update" : "Add"}
            </button>
        </form>
    )
}

export default InsertList