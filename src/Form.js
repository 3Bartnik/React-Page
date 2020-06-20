import React, { Component } from "react";
import styled from "styled-components";

const InputStyle = styled.input`
  &:focus {
    border-color: #4782c1;
  }
`;

const TextAreaStyle = styled.textarea`
  &:focus {
    border-color: #4782c1;
  }
`;

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      message: "",
    };
  }

  handleFullNameChange = (event) => {
    this.setState({ fullName: event.target.value });
  };
  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };
  handleMesssageChange = (event) => {
    this.setState({ message: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    alert(`${this.state.fullName} ${this.state.email} ${this.state.message}`);
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3 style={{ margin: "70px", color: "#4782c1" }}>
          Formularz kontaktowy
        </h3>
        <div className="container">
          <label
            htmlFor="fullname"
            required
            style={{
              fontSize: "1.25rem",
              fontWeight: "300",
            }}
          >
            Imię i nazwisko
          </label>
          <InputStyle
            required
            type="text"
            className="form-control"
            id="InputFullName"
            minLength="3"
            aria-describedby="fullName"
            placeholder="Wpisz imię i nazwisko"
            value={this.state.fullName}
            onChange={this.handleFullNameChange}
            pattern="[a-zA-Z]*"
          ></InputStyle>
          <div style={{ color: "red", fontSize: "12" }}>
            {this.state.fullNameError}
          </div>

          <label
            htmlFor="e-mail"
            style={{ display: "block", fontSize: "1.25rem", fontWeight: "300" }}
          >
            E-mail
          </label>
          <InputStyle
            required
            type="email"
            className="form-control"
            id="InputEmail"
            aria-describedby="email"
            size="15"
            placeholder="Wpisz swój email"
            value={this.state.email}
            onChange={this.handleEmailChange}
          ></InputStyle>

          <div style={{ color: "red", fontSize: "12" }}>
            {this.state.emailError}
          </div>

          <label
            style={{ display: "block", fontSize: "1.25rem", fontWeight: "300" }}
          >
            Wiadomość
          </label>
          <TextAreaStyle
            required
            className="form-control"
            id="FormControlTextarea"
            rows="5"
            cols="70"
            placeholder="Wpisz treść wiadomości"
            value={this.state.message}
            onChange={this.handleMesssageChange}
          ></TextAreaStyle>
          <div style={{ color: "red", fontSize: "12" }}>
            {this.state.messageError}
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            style={{
              fontSize: "1.25rem",
              fontWeight: "300",
              marginTop: "1rem",
            }}
          >
            Wyślij wiadomość
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
