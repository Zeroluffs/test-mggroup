import React, { useContext, useState } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import "../App.css";
import { useForm } from "../utils/hooks";

const api = axios.create({
  baseURL: `https://gorest.co.in/public/v1`,
});
const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Non-binary", value: "nonbinary" },
];
function Register(props) {
  const [errors, setErrors] = useState({});
  const [state, setState] = React.useState({
    name: "",
    email: "",
    status: "",
    gender: "male",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    const userInfo = {
      name: state.name,
      email: state.email,
      status: state.status,
      gender: state.gender,
    };
    console.log(userInfo);
    api
      .post("/users", userInfo, {
        headers: {
          Authorization: `Bearer a4c7f6bed06d7e2f739667c1db1e81c8c081077aca1f5e0a03dd91d57703c17f`,
        },
      })
      .then((res) => {
        console.log(res);
      });
  };
  const onChange = (event) => {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
  };

  return (
    <div className="form-container">
      <Form onSubmit={onSubmit}>
        <h1>Register</h1>
        <Form.Input
          label="Name"
          placeholder="Name.."
          name="name"
          type="text"
          //   value={values.username}
          error={errors.name ? true : false}
          onChange={onChange}
        />
        <Form.Input
          label="Email"
          placeholder="Email.."
          name="email"
          type="email"
          //   value={values.email}
          error={errors.email ? true : false}
          onChange={onChange}
        />
        <Form.Select
          fluid
          label="Gender"
          placeholder="Gender"
          options={options}
          onChange={onChange}
        />
        <Form.Input
          label="Status"
          placeholder="Status.."
          name="status"
          type="status"
          //   value={values.password}
          error={errors.password ? true : false}
          onChange={onChange}
        />
        <Button type="submit" primary>
          Register
        </Button>
      </Form>
    </div>
  );
}

export default Register;
