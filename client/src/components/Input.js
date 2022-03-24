import React, { createRef } from "react";
import "../styles/input.css";

const Input = ({
    type,
    name,
    placeholder,
    labelName,
    inputHandler,
    styles = [],
    required = false,
    pattern,
    defaultInputValue = "",
    disabled = false,
    value
}) => {
    const textInput = createRef();
    return (
        <div className="input-container">
            <label htmlFor={name} id={`${name}Label`} className="block">
                {labelName}
            </label>
            <input
                type={type}
                name={name}
                onChange={inputHandler}
                required={required}
                className="w-full border input-text mt-3 border-gray-400	rounded appearance-none  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
                placeholder={placeholder}
                ref={textInput}
                style={{ styles }}
                defaultValue={defaultInputValue}
                pattern={pattern}
                disabled={disabled}
                value={value}
                step={type === "number" ? "any" : ""}
                autoComplete="off"
                aria-label={labelName}
            />
            <span className="error" id={`${name}Error`} />
        </div>
    );
};

export default Input;
