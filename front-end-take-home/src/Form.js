import React, { useState, useEffect } from "react";

const Form = () => {
  const [occupations, setOccupations] = useState([]);
  const [states, setStates] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    occupation: "",
    state: "",
    // formErrors: {
    //   name: "",
    //   email: "",
    //   password: "",
    //   occupation: "",
    //   state: "",
    // },
    // emailValid: false,
    // passwordValid: false,
    // formValid: false,
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    fetch("https://frontend-take-home.fetchrewards.com/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <form className="demoForm">
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            onChange={handleFormChange}
            type="name"
            className="form-control"
            name="name"
            value={formData.name}
          />

          <label htmlFor="email">Email address</label>
          <input
            onChange={handleFormChange}
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
          />

          <label htmlFor="password">Password</label>
          <input
            onChange={handleFormChange}
            type="password"
            className="form-control"
            name="password"
            value={formData.password}
          />

          <label htmlFor="occupation">Occupation</label>
          <select
            className="form-control"
            onChange={handleFormChange}
            name="occupation"
          >
            {occupations.map((occupation) => (
              <option value={occupation}>{occupation}</option>
            ))}
          </select>

          <label htmlFor="state">State</label>
          <select
            className="form-control"
            onChange={handleFormChange}
            name="state"
          >
            {states.map((state) => (
              <option value={state.name}>{state.abbreviation}</option>
            ))}
          </select>
        </div>
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-primary"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Form;
