import React from "react";

const TextInput = ({
  errorMessage,
  handleFormChange,
  placeholder,
  value,
  name,
}) => {
  return (
    <div>
      <input
        placeholder={placeholder}
        onChange={handleFormChange}
        type={name}
        className="form-control"
        name={name}
        value={value}
      />
      <p className="error-message">{errorMessage}</p>
    </div>
  );
};

export default TextInput;
