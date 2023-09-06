import React from "react"
import "./styles.css"

const Input = ({ label, name, value, onChange }) => {
    return(
        <div className="field">
            <label > {label} </label>
            <input name={name} value={value} onChange={onChange}/>
        </div>  
    );
};

export default Input;