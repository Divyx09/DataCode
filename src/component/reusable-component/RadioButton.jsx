import React from "react";

export default function RadioButton({ handleRadioButton, name, gender }) {
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
          checked={gender === name }
          onChange={handleRadioButton}
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          {name}
        </label>
      </div>
    </>
  );
}
