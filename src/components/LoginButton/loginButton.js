import React from "react";
import "./LoginButton.module.css";

export function LoginButton() {
    
    function openForm() {
        document.getElementById("Login-Form").classList.remove("hide-form");
    }

    return(
        <button onClick={openForm}>
            Войти
        </button>
    )
}