import React, { forwardRef } from "react";
import "./TextArea.scss";

const TextArea = ({ label, placeholder, value, onChange, error }, ref) => {
  return (
    <div className={`textAreaContainer ${error ? "errorContainer" : ""}`}>
      <label className="label">{label}</label>
      <textarea
        ref={ref}
        className={`textArea ${error ? "errorTextArea" : ""}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <span className="errorMessage">{error.message}</span>}
    </div>
  );
};

export default forwardRef(TextArea);
