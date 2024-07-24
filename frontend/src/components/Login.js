import React, { useState } from 'react';
import "./LoginStyles.css";
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    async function loginUser() {
        try {
            console.log(username)
            console.log(password)
            const response = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('token', data.access_token);
                setErrorMessage('Успешный вход Токен сохранен.');
                navigate('/');
            } else {
                throw new Error('Ошибка аутентификации');
            }
        } catch (error) {
            setErrorMessage(error.message);
        }
    }

    return (
        <div className="login-container">
            <h2>Вход</h2>
            <input
                type="text"
                placeholder="Имя пользователя"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={loginUser}>Войти</button>
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
};

export default LoginPage;