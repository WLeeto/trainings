import React, {useState} from 'react'
import './trainingInputForm.css'

export const TrainingInputForm = ({ addNewData }) => {

    const [form, setForm] = useState({ date: '', amount: '' })

    const handleSubmit = (evt) => {
        evt.preventDefault()
        console.log("form data", form)
        if (form.date && Number(form.amount)) {
            addNewData(form.date, Number(form.amount))
            setForm({ date: '', amount: '' })
        }  
    }

    const handleChange = (evt) => {
        const { name, value } = evt.target
        setForm((prevForm) => ({
            ...prevForm,
             [name]: value
        }))
    }

  return (
    <form onSubmit={handleSubmit}>
        <label className="dateLable" htmlFor="date">Дата (ДД.ММ.ГГ)</label>
        <input id="date" name="date" type="date" onChange={handleChange} value={form.date}/>

        <label className="amountLable" htmlFor="amount">Пройдено км</label>
        <input id="amount" name="amount" type="text" onChange={handleChange} value={form.amount}/>
        <button>OK</button>
    </form>
  )
}
