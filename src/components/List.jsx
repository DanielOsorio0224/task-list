import { useState } from "react"
import	PropTypes from 'prop-types'

export default function List({ item, onUpdate ,onDelete}) {

    const [isEdit, setIsEdit] = useState(false)

    function FormEdit() {

        const [newValue , setNewValue] = useState(item.title)

        function  handleSubmit(e){
            e.preventDefault()
        }
        function handleChange(e){
            const value = e.target.value; 

            setNewValue(value)
        }

        function handleClick(){
            onUpdate(item.id, newValue)
            setIsEdit(false)
        }

        return (
            <form onSubmit={handleSubmit}>
                <input className="input-update" type="text" onChange={handleChange} value={newValue}/>
                <button className="button-update" onClick={handleClick}>Update</button>
            </form>
        )
    }

    function ListElement() {
        return (
            <div className="container-list">
                {item.title}
                <button className="button-edit" onClick={() => setIsEdit(true)}>Editar</button>
                <button className="button-delete" onClick={() => onDelete(item.id) }>Eliminar</button>
            </div>
        )
    }

    return (
        <>
            <div>
                {isEdit ? <FormEdit/> : <ListElement/>}
            </div>

        </>
    )
}

List.propTypes = {
    item : PropTypes,
    onUpdate: PropTypes,
    onDelete: PropTypes
}