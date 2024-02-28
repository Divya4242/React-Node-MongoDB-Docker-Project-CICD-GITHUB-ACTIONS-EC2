import React, { useState } from "react";

const Hello = () => {
  const [num1, SetNum1] = useState(0);
  const [num2, SetNum2] = useState(0);
  const [ans, SetAns] = useState(0);

  const sum = async () => {
    try {
      const response = await fetch('http://localhost:5000/add',{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({"num1": Number(num1), "num2": Number(num2)})
      });
      const data = await response.json()
      if(data.result){
        SetAns(data.result)
      }
    } catch (error) {
      console.error(error)
    }
  };
  return (
    <>
      <input
        type="number"
        onChange={(e) => {
          SetNum1(e.target.value);
        }}
        value={num1}
      />
      <input
        type="number"
        onChange={(e) => {
          SetNum2(e.target.value);
        }}
        value={num2}
        id="form3Example3"
        className="form-control"
      />
      <button
        type="submit"
        onClick={(e) => {
          sum(e);
        }}
        className="btn btn-primary btn-block mb-2 "
      >
        Sum
      </button>
      <h2>Ans {ans}</h2>
    </>
  );
}


export default Hello