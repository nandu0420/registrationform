import React, { Component } from "react";

class Rb extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
  }

  formSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectedOption)
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <div class="form-check form-check-inline">
            <input
              type="radio"
              value="Male"
              checked={this.state.selectedOption === "Male"}
              onChange={this.onValueChange}
            />
            <label>
            Male
          </label>
        </div>
        <div class="form-check form-check-inline">
            <input
              type="radio"
              value="Female"
              checked={this.state.selectedOption === "Female"}
              onChange={this.onValueChange}
            />
            <label>
            Female
          </label>
        </div>
        <div class="form-check form-check-inline">
            <input
              type="radio"
              value="Other"
              checked={this.state.selectedOption === "Other"}
              onChange={this.onValueChange}
            />
            <label>
            Other
          </label>
        </div> 
      </form>
    );
  }
}

export default Rb;