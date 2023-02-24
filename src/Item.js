import Close from "./img/close.png"
import logo from "./img/logo_mario.png"
import {AiOutlineClose} from 'react-icons/ai'

export function Item (props){
    const {item , removeItem}= props;
    const handleRemoveClick = ()=>{
        removeItem(item.id)
    }
    return(
        <li className="item">
            
            <button
            className="remove-botton"
            onClick={handleRemoveClick}
            
            >
                <AiOutlineClose/>
            </button>
            <div className="text">{item.text}</div>
            
        </li>
    )
}
