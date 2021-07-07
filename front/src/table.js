import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Table() {
  const [student, setStudent] = useState([]);
  useEffect(() => {
    const req = axios.get("http://localhost:8000/list").then((data) => {
      setStudent(data.data);
    });
  }, []);

  const detele =(id)=>{
    axios.get("http://localhost:8000/del/"+id).then(data=>{
        setStudent(data.data);
    })
  }

  console.log(student);
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Class</th>
            <th scope="col">Division</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          {student.map((data) => {
            return (
              <tr key = {data.id}>
                <th scope="row">{data.name}</th>
                <td>{data.clas}</td>
                <td>{data.division}</td>
                <td>{data.phone}</td>
                <td>
                  <button className="btn btn-outline-danger btn-sm" onClick={()=>detele(data.id)}>
                    <img src="https://img.icons8.com/material-outlined/18/000000/delete-trash.png" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
