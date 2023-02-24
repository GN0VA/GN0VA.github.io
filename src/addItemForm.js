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
            if (text.length > 0 ){
                props.addItem(item)
            }
            setText('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={text}
                onChange={handleTextChange}
                placeholder="Introduce un producto"
            />
            <input type="submit" value="añadir"/>
        </form>
    )
}