import React, { useContext, useState } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import { AuthContext } from "../context/auth";

const api = axios.create({
  baseURL: `https://gorest.co.in/public/v1`,
});
function Login(props) {
  const context = useContext(AuthContext);

  const [errors, setErrors] = useState({});
  const [state, setState] = React.useState({
    id: "",
  });

  const onChange = (event) => {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    const userInfo = {
      id: state.id,
    };

    api
      .get(`/users/${userInfo.id}`, {
        headers: {
          Authorization: `Bearer a4c7f6bed06d7e2f739667c1db1e81c8c081077aca1f5e0a03dd91d57703c17f`,
        },
      })
      .then((res) => {
        context.login(userInfo);
        console.log(res.data);
      });
  };

  return (
    <div className="form-container">
      <Form onSubmit={onSubmit}>
        <h1>Login</h1>
        <Form.Input
          label="User ID"
          placeholder="UserID.."
          name="id"
          type="text"
          //   value={values.username}
          error={errors.id ? true : false}
          onChange={onChange}
        />
        <Button type="submit" primary>
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
