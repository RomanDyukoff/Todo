import './styles.scss';

// const arr = [, {title: "колла"}];

const List = (props) => {
    return (
        <ul className='list'>
            {props.title}
        </ul>
    )
};

export default List;
