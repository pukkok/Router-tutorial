import React, { useState } from "react";

function Input ({placeholder, children, handleChange, value}) {

    return(
        <div className="input-box">
            <input type="text" onChange={handleChange} placeholder={placeholder} value={value}/>
            <span>{children}</span>
        </div>
    )
}
export default Input

Input.defaultProps = {
    placeholder: ''
}