


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

            </button>
            <div className="text">{item.text}</div>
        </li>
    )
}
