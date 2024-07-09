import React, { forwardRef } from "react";
import "./Input.scss";

const Input = forwardRef(
  ({ label, placeholder, value, onChange, error, type = "text" }, ref) => {
    return (
      <div className="input-container">
        <label className="label">{label}</label>
        <input
          ref={ref}
          className={`input ${error ? "error-input" : ""}`}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {error && <span className="error-message">{error.message}</span>}
      </div>
    );
  }
);

export default Input;
