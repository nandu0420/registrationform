import React from "react";
import { useState, useEffect } from "react";
const Tab = (props) => {
  const [data, setdata] = useState(null);
  useEffect(() => {
    setdata(props.data);
    return console.log("loaded");
  });
  return (
    <div>
      {" "}
      {data ? (
        <div>
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">username</th>
                <th scope="col">DoB</th>
                <th scope="col">Class</th>
                <th scope="col">Division</th>
                <th scope="col">Gender</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>data.id</td>
                <td>data.username</td>
                <td>data.DoB</td>
                <td>data.class</td>
                <td>data.division</td>
                <td>data.gender</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        "loading...."
      )}
    </div>
  );
};
export default Tab;
