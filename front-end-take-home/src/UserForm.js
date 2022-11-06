import React, { useState, useEffect } from "react";

const UserForm = ({ setIsSubmitted, isSubmitted }) => {
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

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitted) {
      console.log(formData);
    }
  }, [formErrors]);

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
    console.log(formData);
    let errors = validate(formData);
    if (errors.length > 0) {
      setFormErrors(errors);
    } else {
      fetch("https://frontend-take-home.fetchrewards.com/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.id) {
            setIsSubmitted(true);
          }
        });
    }
  };

  console.log(isSubmitted);

  return (
    <div>
      <form className="demoForm">
        <h1 className="form-heading">Join our team!</h1>
        <div className="form-group">
          <input
            placeholder="Your Name*"
            onChange={handleFormChange}
            type="name"
            className="form-control"
            name="name"
            value={formData.name}
          />
          <p className="error-message">{formErrors.name}</p>

          <input
            placeholder="Your Email*"
            onChange={handleFormChange}
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
          />
          <p className="error-message">{formErrors.email}</p>

          <input
            placeholder="Password*"
            onChange={handleFormChange}
            type="password"
            className="form-control"
            name="password"
            value={formData.password}
          />
          <p className="error-message">{formErrors.password}</p>

          <br></br>

          <select
            className="form-control"
            onChange={handleFormChange}
            name="occupation"
          >
            <option>Select Occupation*</option>
            {occupations.map((occupation) => (
              <option key={occupation.id} value={occupation}>
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
            {states.map((state) => (
              <option value={state.name}>{state.abbreviation}</option>
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
