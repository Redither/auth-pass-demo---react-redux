import React from "react";
import { LoginButton } from "../../components/LoginButton/loginButton";
import "./SamplePage.css";

export function SamplePage() {
    return(
        <section>
                <h1>Просмотр недоступен</h1>
                <div className="content-block">
                    <p>Вы не сможете просматриват контент, пока не войдете</p>
                    <p><strong>Нажмите на кнопку, чтобы войти</strong></p>
                    <LoginButton/>
                </div>
        </section>
    )
}