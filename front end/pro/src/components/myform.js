import React from 'react'
import Rb from './rb'
import Sdiv from './select'


const Myform = () =>{
    return(
        <div class="container">
            <form>
            <h2>REGISTER HERE</h2>
            <div class="form-group">
                <label for="email">Name</label>
                <input type="text" placeholder="Enter you name"/><br/>
            </div>
            <div class="form-group">
                <label for="dob">D O B</label>
                <input type="date"/><br/>  
            </div>
            <div class="form-group">
                <Sdiv/>              
            </div>
            <div class="form-group">
                <label for="gender">Gender</label>
                <Rb/><br/>
            </div>
            <button type="submit" class="btn btn-primary">Register</button>
            </form>
        </div>   
    )
}
export default Myform