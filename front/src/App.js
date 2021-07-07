import React from "react";
import Form from "./form";
import Table from "./table";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h2>Student Register</h2>
          <br />
          <br />
          <Form />
        </div>
        <div className="col-6">
        <h2>Student List</h2>
          <br />
          <br />
          <Table />
        </div>
      </div>
    </div>
  );
}

export default App;
