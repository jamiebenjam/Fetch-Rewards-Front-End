import React, { useState, useEffect } from "react";

const Form = () => {
  //   const [formState, setFormState] = useState({
  //     name: "",
  //     email: "",
  //     password: "",
  //     occupation: "",
  //     state: "",
  //     formErrors: {
  //       name: "",
  //       email: "",
  //       password: "",
  //       occupation: "",
  //       state: "",
  //     },
  //     emailValid: false,
  //     passwordValid: false,
  //     formValid: false,
  //   });

  const [occupations, setOccupations] = useState([]);
  const [states, setStates] = useState([]);

  useEffect(() => {
    fetch("https://frontend-take-home.fetchrewards.com/form")
      .then((response) => response.json())
      .then((data) => {
        setOccupations(data.occupations);
        setStates(data.states);
      });
  }, []);

  console.log(occupations);
  console.log(states);

  const handleOccupationChange = () => {
    console.log("changedOccupation");
  };

  const handleStateChange = () => {
    console.log("changedState");
  };

  // const handleUserInput = (e) => {
  //     e.preventDefault();
  //     const newFormObj = {
  //         email: '',
  //         password: ''
  //     }
  // }

  return (
    <div>
      <form className="demoForm">
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="name" className="form-control" name="name" />

          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" name="email" />

          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" name="password" />

          <label htmlFor="occupation">Select Occupation</label>
          <select className="form-control" onChange={handleOccupationChange}>
            {occupations.map((occupation) => (
              <option value={occupation}>{occupation}</option>
            ))}
          </select>

          <label htmlFor="state">State</label>
          <select className="form-control" onChange={handleStateChange}>
            {states.map((state) => (
              <option value={state.name}>{state.abbreviation}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Form;
