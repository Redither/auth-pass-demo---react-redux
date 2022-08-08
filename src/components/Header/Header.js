import React from "react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { selectLogin } from "../../features/loginer/loginerSlice";
import { LoginButton } from "../LoginButton/loginButton";
import { LogoutButton } from "../LogoutButton/LogoutButton";
import "./Header.css";

export function Header(props) {
    const isLogined = useSelector(selectLogin);

    if (isLogined) {
        return(
            <div className="header-container">
                <header>
                    <nav>
                        <Link to="/">Главная</Link>
                        <Link to="/userlist">Пользователи</Link>
                        <LogoutButton />
                    </nav>
                </header>
            </div>
    )} else {
        return(
            <div className="header-container">
                <header>
                    <nav>
                        <Link to="/">Главная</Link>
                        <Link to="/userlist">Пользователи</Link>
                        <LoginButton/>
                    </nav>
                </header>
            </div>
    )}
}