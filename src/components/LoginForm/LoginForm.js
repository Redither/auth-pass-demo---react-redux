import React, { useState } from "react";
import { login } from "../../features/loginer/loginerSlice";
import { useDispatch } from 'react-redux';
import "./LoginForm.css";

export function LoginForm({LogIn}) {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()

    function closeForm() {
        document.getElementById("Login-Form").classList.add("hide-form");
    }
    const submitLogin = (e) => {
        e.preventDefault();
        dispatch(login());
        closeForm();
    }

    return (
        <div className="login-form__container hide-form" id="Login-Form">
            <form className="login-form" onSubmit={submitLogin}>
                <button 
                    className="close-form-btn"
                    onClick={closeForm}
                >
                    X
                </button>
                <h2>Авторизация</h2>
                <input
                    placeholder="Введите логин"
                    type="login"
                    value={username}
                    onChange={e => setUserName(e.target.value)}
                />
                <input
                    placeholder="Введите пароль"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="submit">Авторизоваться</button>
            </form>
        </div>
    )
}