import React from "react";
import Tab from './tab';
import axios from "axios";
import {useform} from 'react-hook-form';
import { useState, useEffect, useInput } from "react";
const Regform = () => {
  const {register,handlesubmit}=useform()
  const [student, setstudent] = useState({
    studentname: "",
    Dob: "",
    CLASS: "",
    Division: "",
  });
  const [user,setuser]=useState(null);
  const [data, setdata] = useState({
    male: "male",
    female: "female",
    other: "other",
  });
  const [gender, setGender] = useState("");
  //   const [gender, setgender] = useInput("");
  const [records, setRecord] = useState([]);
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setstudent({ ...student, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    var dt={
      id:records,
      name:document.getElementById("username"),
      Dob:document.getElementById("DoB"),
      CLASS:document.getElementById("cls"),
      division:document.getElementById("divi"),
      gender:document.getElementById("data.gender"),
    }
    var newRecord = { ...student, id: new Date().getTime().toString };
    setRecord([...records, newRecord]);
    axios.post('http://localhost:8000/create',dt).then((request)=>{
      setuser(request.data).catch((error)=>{
        console.log(error)
      })
      
    })
  };

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
            value={student.studentname}
          />
        </div>
        <div>
          <label htmlFor="DoB">Date of birth </label>
          <input
            type="date"
            autoComplete="0ff"
            onChange={handleInput}
            name="DoB"
            id="DoB"
            value={student.Dob}
          />
        </div>
        <div>
          <label htmlFor="CLASS">CLASS</label>
          <select  id="cls" onChange={handleInput}>
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
            value
          </select>
        </div>
        <div>
          <label htmlFor="Division">Division</label>
          <select id="divi" onChange={handleInput}>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
        </div>
        <div>
          <input
            type="radio"
            id={data.male}
            value={data.male}
            checked={data.male === gender}
            onChange={setGender}
          />{" "}
          <label htmlFor={data.male}>Male</label>{" "}
        </div>
        <div>
          <input
            type="radio"
            id={data.female}
            value={data.female}
            checked={data.female === gender}
            onChange={setGender}
          />{" "}
          <label htmlFor={data.female}>Female</label>{" "}
        </div>
        <div></div>
        <button type="submit">"Register"</button>
      </form>
      <Tab data={user}/>
    </div>
  );
};
export default Regform;
