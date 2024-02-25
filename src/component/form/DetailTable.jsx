import React from "react";

export default function DetailTable({ details }) {
  const TABLE_HEADERS = [
    "USER_NAME",
    "EMAIL",
    "GENDER",
    "ABOUT_YOU",
    "CITY",
    "LANGUAGES",
  ];
  return (
    <>
      <h2 className="text-primary">User Details Table</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            {TABLE_HEADERS.map((value, index) => (
              <th className="text-warning" key={index}>{value}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {details.map((data, index) => (
              <td key={index}>{data}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </>
  );
}
