import React from "react";
const Button = ({ children, customClass, onClick }) => {
    return (
        <button className={`button-card ${customClass || ''}`} onClick={onClick}>
            {children || "Button"}
        </button>
    );
}
export default Button;