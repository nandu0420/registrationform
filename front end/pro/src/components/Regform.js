import React from "react";
import Tab from "./tab";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { userSchema } from "./Validations/UserValidation";
import { yupResolver } from '@hookform/resolvers/yup';
//import * as yup from 'yup';
const Regform = () => {
  const { register , formState:{errors} } = useForm({resolver:yupResolver(userSchema)});
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
      name: document.getElementById("studentname"),
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
            name="studentnamename"
            id="studentname"
            value={student.studentname}
            {...register('firstName')} className={`form-control ${errors.studentname ? 'is-invalid' : ''}`}
            
          />
          <div className="invalid-feedback">{errors.firstName?.message}</div>
        </div>
        <div>
          <label htmlFor="Dob">Date of birth </label>
          <input
            type="date"
            autoComplete="0ff"
            onChange={handleInput}
            name="Dob"
            id="Dob"
            value={student.Dob}
            {...register('Dob')} className={`form-control ${errors.Dob ? 'is-invalid' : ''}`}
           />
           <div className="invalid-feedback">{errors.Dob?.message}</div>
        </div>
        <div>
          <label htmlFor="CLASS">CLASS</label>
          <select
            name="cls"
            id="cls"
            onChange={handleInput}
            value={student.CLASS}
            {...register('CLASS')} className={`form-control ${errors.CLASS ? 'is-invalid' : ''}`}
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
          <div className="invalid-feedback">{errors.CLASS?.message}</div>
          
        </div>
        <div>
          <label htmlFor="Division">Division</label>
          <select
            name="divi"
            id="divi"
            onChange={handleInput}
            {...register('divi')} className={`form-control ${errors.Division ? 'is-invalid' : ''}`}>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
          <div className="invalid-feedback">{errors.Division?.message}</div>
        </div>
        <div onChange={setGender}>
          <input
            type="radio"
            value="MALE"
            name="gender"
            id="gender"
           {...register('Dob')} className={`form-control ${errors.Dob ? 'is-invalid' : ''}`}
          />{" "}
          Male
          <input
            type="radio"
            value="FEMALE"
            name="gender"
            id="gender"
           {...register('Dob')} className={`form-control ${errors.Dob ? 'is-invalid' : ''}`}
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
