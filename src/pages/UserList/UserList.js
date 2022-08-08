import React, { useEffect, useState } from "react";
import "./UserList.css";

export function UserList() {
    const [userList, setUserList] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                const ULMap = result.map(element => ({ name: element.name, email: element.email, city: element.address.city }));
                setUserList(ULMap);
            })
    },[])


    return (
        <section>
            <h1>Список пользователей</h1>
            <ul>
                {userList.map((el, index) => <li key={index}><p><strong>{el.name}</strong> {el.email} <strong>{el.city}</strong></p></li>)}
            </ul>
        </section>
    )
}