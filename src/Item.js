
import {AiOutlineClose} from 'react-icons/ai'

export function Item (props){
    const {item , removeItem}= props;
    let removeActive=true
    const handleRemoveClick = (event)=>{
        const element = event.target.closest(".item");
        element.classList.add("removing");
        setTimeout(()=>{
            removeItem(item.id)
        },1000)
        
    }
    return(
        <div className="item">
            
            <button
            className="remove-botton"
            onClick={handleRemoveClick}
            
            >
                <AiOutlineClose/>
            </button>
            <div className="text"><p className="item-text">{item.text}</p></div>
            
        </div>
    )
}
