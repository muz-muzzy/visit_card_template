import "./FormStyles.css";

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form>
            <label>Ваше имя</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="email"></input>
            <label>Тема</label>
            <input type="text"></input>
            <label>Сообщение</label>
            <textarea rows="6" placeholder="Напишите что-нибудь"/>
            <button className="btn">Отправить</button>
        </form>
    </div>
  )
}

export default Form
