import React from "react";
import Button from './Button.jsx';
import '../Styles/Card.css';

const Card = ({ children, customClass, customInput, buttonText, onButtonClick }) => {
    return (
        <div className={`card ${customClass || ''}`}>
            {customInput || <input className="input-card" type="text" placeholder="Correo" />}
            <Button onClick={onButtonClick}>{buttonText || "Buscar"}</Button>
            {children}
        </div>
    );
};

export default Card;