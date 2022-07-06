import './styles.scss';



const Item = ({ title, id, completed, handleToggle, removeTask }) => {
    
    return (
        <li className="item" key={id} id={id}>
            <input type="checkbox" checked={completed} onChange={() => handleToggle(id)}/>
            {title}
            <span className="item__close" onClick={() => removeTask(id)}>&times;</span>
        </li>
    )
};

export default Item;
