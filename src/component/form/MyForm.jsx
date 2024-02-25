import React, { useState } from "react";
import CheckBox from "../reusable-component/CheckBox";
import Button from "../reusable-component/Button";
import RadioButton from "../reusable-component/RadioButton";

export default function Myform({ handleDetails }) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [textArea, setTextArea] = useState("");
  const [reactCheckBox, setReactCheckBox] = useState("");
  const [htmlCheckBox, setHtmlCheckBox] = useState("");
  const [cssCheckBox, setCssCheckBox] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("Indore");
  const [details, setDetails] = useState([]);

  //This Method is used to handle Chcekbox detail.
  const handelCheckBox = (value) => {
    if (value === "REACT") {
      setReactCheckBox(value);
    } else if (value === "HTML") {
      setHtmlCheckBox(value);
    } else if (value === "CSS") {
      setCssCheckBox(value);
    }
  };
  //This method handle radio button.
  const handleRadioButton = (e) => {
    setGender(e.target.value);
  };

  //This method is used to clear form data.
  const clearForm = () => {
    setEmail("");
    setUserName("");
    setTextArea("");
  };
  //This method Handle Submit Event.
  const handleSubmmitEvent = (e) => {
    e.preventDefault();
    const langData = [reactCheckBox + " ", htmlCheckBox + " ", cssCheckBox];
    setDetails([userName, email, gender, textArea, city, langData]);
    handleDetails(details);
    console.log(
      "Username: " +
        userName +
        ",Email: " +
        email +
        ",Gender: " +
        gender +
        ",City: " +
        city
    );
  };
  return (
    <>
      <h2 className="text-dark">User Information Form</h2>
      <form
        className="container border border-primary border-3 rounded"
        onSubmit={handleSubmmitEvent}
        style={{ width: "600px" }}
      >
        <div className="mb-3 mt-2">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Username
          </label>
          <input
            required
            type="text"
            className="form-control"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            id="exampleFormControlInput1"
            placeholder="Username"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email
          </label>
          <input
            required
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <label htmlFor="flrxRadioDefault1">Select Your Gender</label>
        <RadioButton name={"Male"} handleRadioButton={handleRadioButton} />
        <RadioButton name={"Female"} handleRadioButton={handleRadioButton} />
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label mt-3"
          >
            About You
          </label>
          <textarea
            className="form-control "
            id="exampleFormControlTextarea1"
            rows="3"
            value={textArea}
            onChange={(e) => {
              setTextArea(e.target.value);
            }}
          ></textarea>
        </div>
        <label className="form-label">Which language will you prefer?</label>
        <CheckBox name={"REACT"} handelCheckBox={handelCheckBox} />
        <CheckBox name={"HTML"} handelCheckBox={handelCheckBox} />
        <CheckBox name={"CSS"} handelCheckBox={handelCheckBox} />
        <label>Select Your Location</label>
        <select
          className="form-select"
          aria-label="Default select example"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        >
          <option value="Indore">Indore</option>
          <option value="Ujjain">Ujjain</option>
          <option value="Dewas">Dewas</option>
          <option value="Bhopal">Bhopal</option>
        </select>
        <div className="col-12 d-flex justify-content-around">
          <Button
            btnColor={"primary"}
            btnName={"Submit Form"}
            btnType={"submit"}
          />
          <Button
            btnColor={"dark"}
            btnName={"Reset Form"}
            btnType={"reset"}
            clearForm={clearForm}
          />
        </div>
      </form>
    </>
  );
}
