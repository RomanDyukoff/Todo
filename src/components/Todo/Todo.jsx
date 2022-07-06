import './styles.scss';
import Item from '../Item/Item';


const Todo = ({ items, handleToggle, removeTask }) => {

    return (
        <ul className="todo">
            {items.map((item) => 
                <Item  
                    key={item.id}
                    id={item.id}
                    title={item.title} 
                    checked={item.completed} 
                    handleToggle={handleToggle}
                    removeTask={removeTask}
                />
            )}
        </ul>
    )
};

export default Todo;
