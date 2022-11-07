import React from "react";
import star from ".//Images/star.png";

const UserFormSuccess = () => {
  return (
    <div className="form-container">
      <img className="star" src={star} alt="star" />
      <h3 className="success">
        Thank you for your interest! <br /> Your submission has been received.
      </h3>
    </div>
  );
};

export default UserFormSuccess;
