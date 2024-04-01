import React, { useState } from "react";
import "./Form.css";
const RegForm = () => {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((pre) => ({ ...pre, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thankyou ${formData}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <div className="form_body">
          <label className="form__label">First Name</label>
          <input
            type="text"
            name="fname"
            value={formData.fname || ""}
            className="form_input"
            placeholder="Enter Your First Name"
            onChange={handleChange}>
            </input>
          <label className="form__label">Last Name</label>
          <input
            type="text"
            name="lname"
            value={formData.lname || ""}
            className="form_input"
            placeholder="Enter Your Last Name"
            onChange={handleChange}
          ></input>
          <label className="form__label">Email Id</label>
          <input
            type="email"
            name="email"
            value={formData.email || ""}
            className="form_input"
            placeholder="Enter Email Id"
            onChange={handleChange}
          ></input>
          <label className="form__label">Mobile No.</label>
          <input
            type="tel"
            name="num"
            value={formData.num || ""}
            className="form_input"
            placeholder="Enter Your Mobile No."
            onChange={handleChange}
          ></input>
          <lable className="form_label" style={{fontWeight: 'bolder'}}> Gender:- </lable>
          <lable className="form_label" style={{ marginLeft: "140px",fontWeight: 'bolder' }}>
            Female
            <input
              type="radio"
              name="gender"
              value={formData.gender || ""}
              className="form_radio"
            ></input>
          </lable>
          <lable className="form_label" style={{ marginLeft: "40px",fontWeight: 'bolder' }}>
         
            Male
            <input
              type="radio"
              name="gender"
              value={formData.gender || ""}
              className="form_radio"
            ></input>
          </lable>
          <label className="form__label">New Password</label>
          <input
            type="password"
            name="pw"
            value={formData.pw || ""}
            className="form_input"
            placeholder="Enter Your Password"
            onChange={handleChange}
          ></input>
          <label className="form__label">Confirm Password</label>
          <input
            type="password"
            name="cpw"
            value={formData.cpw || ""}
            className="form_input"
            placeholder="Enter Your Confirm Password"
            onChange={handleChange}
          ></input>
          <div className="footer">
            <button>Submit</button>
          </div>
        </div>
      </form>
    </>
  );
};
export default RegForm;
