import { useState } from 'react';
import './styles.scss';


const Form = ({ addTask }) => {

    const [value, setValue] = useState('')

    const handleChange = (e) => {
        setValue(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(value)
        setValue("")
    }

    const handelPressEnter = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e)
        }
    }

    return (
        <form className='form' action="#" onSubmit={handleSubmit}>
            <div className='form__group'>
                <input className="form__input" value={value} onChange={handleChange} />
                <label className="form__label">new todo</label>
            </div>
            <button className='form__button' onKeyDown={handelPressEnter} >Create</button>
        </form>
    )
}

export default Form
