import './styles.scss';
import Item from '../Item/Item';

const Todo = ({ items }) => {

    console.log(items);

    return (
        <ul className="todo">
            {items.map((item) => <Item  data-id={ item.id } title={ item.title } checkt={ item.checkt } />)}
        </ul>
    )
};

export default Todo;
