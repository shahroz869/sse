import React from "react";

class BMICalculator extends React.Component {
  state = {
    weight: 0,
    height: 0,
    bmi: 0
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  calculateBMI = () => {
    const { weight, height } = this.state;
    const bmi = weight / (height * height);

    this.setState({
      bmi: bmi
    });
  };

  render() {
    const bmi = this.state.bmi;
    let message;

    if (bmi < 18.5) {
      message = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      message = "Healthy weight";
    } else if (bmi >= 25 && bmi < 30) {
      message = "Overweight";
    } else {
      message = "Obese";
    }

    return (
      <div>
        <label>
          Weight (kg):
          <input
            type="number"
            name="weight"
            value={this.state.weight}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Height (m):
          <input
            type="number"
            name="height"
            value={this.state.height}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <button onClick={this.calculateBMI}>Calculate BMI</button>
        <br />
        Your BMI is: {this.state.bmi}
        <br />
        You are {message}.
      </div>
    );
  }
}

export default BMICalculator;
