import React from "react";

export default function Button({btnName,btnColor,btnType,clearForm}) {
  return (
    <>
      <button className={`btn btn-${btnColor} my-4`} type={btnType} onClick={clearForm}>
        {btnName}
      </button>
    </>
  );
}
