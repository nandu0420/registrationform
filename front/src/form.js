import React from "react";
import axios from "axios";

export default function Form() {
  function formData(e) {
    e.preventDefault();
    var data = {
      name: document.getElementById("name").value,
      clas: document.getElementById("class").value,
      dob: document.getElementById("dob").value,
      division: document.getElementById("division").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
    };
    axios.post("http://localhost:8000/add", data);
  }

  return (
    <div>
      <form action="/">
        <table>
          <tr>
            <td>name</td>
            <td>
              {" "}
              <input type="text" id="name" />{" "}
            </td>
          </tr>
          <tr>
            <td>Date of Birth</td>
            <td>
              {" "}
              <input type="date" id="dob" />{" "}
            </td>
          </tr>
          <tr>
            <td>Class</td>
            <td>
              <select id="class">
                <option value="one">I</option>
                <option value="two">II</option>
                <option value="three">III</option>
                <option value="four">IV</option>
                <option value="four">IV</option>
                <option value="five">V</option>
                <option value="six">VI</option>
                <option value="seven">VII</option>
                <option value="eight">VIII</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Division</td>
            <td>
              <select id="division">
                <option value="a">A</option>
                <option value="b">B</option>
                <option value="c">C</option>
                <option value="d">D</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Gender</td>
            <input type="radio" name="genter" value="male" />
            <label>male</label> <br />
            <input type="radio" name="genter" value="female" />{" "}
            <label>female</label> <br />
          </tr>
          <tr>
            <td>Email</td>
            <td>
              <input type="text" id="email" />
            </td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>
              <input type="text" id="phone" />
            </td>
          </tr>
          <tr>
              <td colSpan="2">
              <h6 className="text-primary">You have to save the data before you submit</h6>
              </td>
          </tr>
          <tr>
              <td></td>
            <td>
               <input className="btn btn-block btn-primary" onClick={formData} type="button" value="Save" />
            </td>
          </tr>
          <tr>
              <td></td>
          <td>
              <input className="btn btn-block btn-success" type="submit" value="Submit" />
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
}
