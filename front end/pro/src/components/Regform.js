import React from "react";
import Tab from "./tab";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";
const Regform = () => {
  const { register, errors } = useForm();
  const [student, setStudent] = useState({
    studentname: "",
    Dob: "",
    CLASS: "",
    Division: "",
    gender: "",
  });
  const [user, setUser] = useState("");
  const setGender = (event) => {
    console.log(event.target.value);
    setStudent({ ...student, gender: event.target.value });
    console.log(student);
  };
  const [records, setRecord] = useState([]);
  //const onSubmit = ( data,e) => {
  // console.log("data: ", { e });
  //};

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var dt = {
      id: records,
      name: document.getElementById("username"),
      Dob: document.getElementById("Dob"),
      CLASS: document.getElementById("cls"),
      division: document.getElementById("divi"),
      gender: document.getElementById("gender"),
    };
    var newRecord = { ...student, id: new Date().getTime().toString };
    setRecord([...records, newRecord]);
    axios.post("http://localhost:8000/create", dt).then((request) => {
      setUser(request.data).catch((error) => {
        console.log(error);
      });
    });
  };
  console.log(student);
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="studentname">studentname</label>
          <input
            type="text"
            autoComplete="off"
            onChange={handleInput}
            name="username"
            id="username"
            ref={register({ pattern: /^[a-zA-Z ]*$/ })}
            value={student.studentname}
          />
          {errors.username && "pls enter a valid username"}
        </div>
        <div>
          <label htmlFor="Dob">Date of birth </label>
          <input
            type="date"
            autoComplete="0ff"
            onChange={handleInput}
            name="Dob"
            id="Dob"
            ref={register({
              pattern: /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
            })}
            value={student.Dob}
          />
          {errors.Dob && "pls enter a valid date of birth"}
        </div>
        <div>
          <label htmlFor="CLASS">CLASS</label>
          <select
            name="cls"
            id="cls"
            onChange={handleInput}
            value={student.CLASS}
            ref={register({ required: true })}
          >
            <option value="I">I</option>
            <option value="II">II</option>
            <option value="III">III</option>
            <option value="IV">IV</option>
            <option value="V">V</option>
            <option value="VI">VI</option>
            <option value="VII">VI</option>
            <option value="VIII">VIII</option>
            <option value="IX">IX</option>
            <option value="X">X</option>
            <option value="XI">XI</option>
            <option value="XII">XII</option>
          </select>
          {errors.cls && "pls enter the class"}
        </div>
        <div>
          <label htmlFor="Division">Division</label>
          <select
            name="divi"
            id="divi"
            onChange={handleInput}
            ref={register({ required: true })}
          >
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
          {errors.divi && "pls enter the division of class"}
        </div>
        <div onChange={setGender}>
          <input
            type="radio"
            value="MALE"
            name="gender"
            id="gender"
            ref={register({ required: true })}
          />{" "}
          Male
          <input
            type="radio"
            value="FEMALE"
            name="gender"
            id="gender"
            ref={register({ required: true })}
          />{" "}
          Female
        </div>

        <div></div>
        <button type="submit">"Register"</button>
      </form>
      <Tab data={user} />
    </div>
  );
};
export default Regform;
