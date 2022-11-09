import React, { useState, useEffect } from "react";
import TextInput from "./TextInput";
import logo from ".//Images/aura logo.png";

const UserForm = ({ setIsSubmitted }) => {
  const [occupations, setOccupations] = useState([]);
  const [states, setStates] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    occupation: "",
    state: "",
  });

  useEffect(() => {
    fetch("https://frontend-take-home.fetchrewards.com/form")
      .then((response) => response.json())
      .then((data) => {
        setOccupations(data.occupations);
        setStates(data.states);
      });
  }, []);

  const handleFormChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 11) {
      errors.password = "Password must be at least 12 characters";
    }
    if (!values.occupation) {
      errors.occupation = "Occupation is required";
    }
    if (!values.state) {
      errors.state = "State is required";
    }
    return errors;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let errors = validate(formData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      fetch("https://frontend-take-home.fetchrewards.com/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      //future use - if (response.ok) for error handling
        .then((response) => response.json())
        .then((data) => {
          if (data.id) {
            setIsSubmitted(true);
          }
        });
    }
  };

  return (
    <div className="form-container">
      <img className="logo" src={logo} alt="aura-logo" />
      <h3 className="logo-name">
        Faux<span className="logo-span">Co</span>
      </h3>
      <form>
        <h1 className="form-heading">Applicant Information</h1>
        <div className="form-group">
          <TextInput
            name="name"
            handleFormChange={handleFormChange}
            errorMessage={formErrors.name}
            placeholder="Your Name*"
            value={formData.name}
          />

          <TextInput
            name="email"
            handleFormChange={handleFormChange}
            errorMessage={formErrors.email}
            placeholder="Your Email*"
            value={formData.email}
          />

          <TextInput
            name="password"
            handleFormChange={handleFormChange}
            errorMessage={formErrors.password}
            placeholder="Password*"
            value={formData.password}
          />

          <br />

          <select
            className="form-control"
            onChange={handleFormChange}
            name="occupation"
          >
            <option>Select Occupation*</option>
            {occupations.map((occupation, index) => (
              <option key={index} value={occupation}>
                {occupation}
              </option>
            ))}
          </select>
          <p className="error-message">{formErrors.occupation}</p>

          <select
            className="form-control"
            onChange={handleFormChange}
            name="state"
          >
            <option>Select State*</option>
            {states.map((state, index) => (
              <option key={index} value={state.name}>
                {state.abbreviation}
              </option>
            ))}
          </select>
          <p className="error-message">{formErrors.state}</p>
        </div>

        <button
          className="submit-button"
          onClick={handleFormSubmit}
          type="submit"
        >
          Apply
        </button>
      </form>
    </div>
  );
};

export default UserForm;
