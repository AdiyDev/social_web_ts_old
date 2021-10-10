import React from "react";
import s from "./../Dialogs.module.css";

const Message = (props) => {
    return (
        <li className={s.message}>
            <img
                src="http://www.petplan.com.au/blog/wp-content/uploads/2016/12/pet-insurance-dog-cat-8.jpg"
                alt=""></img>
            <p>{props.message}</p>
        </li>
    )
}

export default Message;