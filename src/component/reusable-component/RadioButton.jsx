import React from "react";

export default function RadioButton({ handleRadioButton, name }) {
  return (
    <>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="gender"
          id="flexRadioDefault1"
          value={name}
          required
          onChange={handleRadioButton}
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          {name}
        </label>
      </div>
    </>
  );
}
