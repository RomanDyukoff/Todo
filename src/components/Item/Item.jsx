import './styles.scss';

const Item = ({ title, id, checkt }) => {

    return (
        <li className="item" data-id={id}>
            <input type="checkbox" checked={checkt} />
            {title}
            <span className="item__close">&times;</span>
        </li>
    )
};

export default Item;
