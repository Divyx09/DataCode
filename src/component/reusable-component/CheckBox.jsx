import React from "react";

export default function CheckBox({ name, handelCheckBox}) {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        onChange={() => handelCheckBox(name)}
        id="flexCheckDefault"
      />
      <label className="form-check-label" htmlFor="flexCheckDefault">
        {name}
      </label>
    </div>
  );
}
