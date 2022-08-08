import React from "react";
import { useDispatch } from 'react-redux';
import { logout } from "../../features/loginer/loginerSlice";
import "./LogoutButton.module.css";

export function LogoutButton(props) {
    const dispatch = useDispatch()
    return(
        <button onClick={() => dispatch(logout())}>
            Выйти
        </button>
    )
}