import './styles.scss';

const Form = () => {
    return (
        <form className='form' action="#">
            <div className='form__group'>
                <input className="form__input"/>
                <label className="form__label">new todo</label>
            </div>
            <button className='form__button'>Create</button>
        </form>
    )
}

export default Form
