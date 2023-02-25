import { useState } from "react";
import generateId from "./utilities";

export default function AddItemForm(props){
    const [text,setText] = useState('')
    const handleTextChange = (event)=>{
        setText(event.target.value)
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
            const item = {
                id: generateId(),
                text: text

            }
            if (text.length > 0 && text.length<40){
                props.addItem(item)
            }else{
                alert('El texto introducido no es valido')
            }
            setText('')
    }
    return (
        <form onSubmit={handleSubmit} className="form">
            <input 
                type="text"
                value={text}
                onChange={handleTextChange}
                placeholder="Introduce un producto"
                className="input-lista"
            />
            <input type="submit" value='Añadir' className="submit-lista"/>
        </form>
    )
}