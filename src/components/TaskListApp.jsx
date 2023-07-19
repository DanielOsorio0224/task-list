import { useState } from "react"
import List from "./List"
import './TaskListApp.css'

export default function TaskListApp() {

    const [title, setTitle] = useState("")
    const [list, setList] = useState([])

    function handleChange(e) {
        const value = e.target.value;

        setTitle(value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        const newList = {
            id: crypto.randomUUID(),
            title: title,
            completed: false
        }
        const temp = [...list];
        temp.unshift(newList);

        setList(temp)

        setTitle("")
    }

    function handleUpdate(id, value) {
        const temp = [...list]
        const item = temp.find(item => item.id === id)
        item.title = value
        setList(temp)
    }

    function handleDelete(id) {
        const temp = list.filter(item => item.id != id)

        setList(temp)
    }

    return (
        <div className="container ">
            <form className="form" >
                <input className="field-input" value={title} onChange={handleChange} />
                <input className="button" type="submit" value="create" onClick={handleSubmit} />
            </form>
            <div className="container-list">
                    {
                        list.map(item => (
                            <List key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete} />
                        ))
                    }
                </div>
        </div>
    )
}
