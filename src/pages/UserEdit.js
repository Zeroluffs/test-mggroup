import React, { useContext, useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import "../App.css";
import { AuthContext } from "../context/auth";

const api = axios.create({
  baseURL: `https://gorest.co.in/public/v1`,
});

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Non-binary", value: "nonbinary" },
];

function UserEdit(props) {
  const { logout } = useContext(AuthContext);

  const [errors] = useState({});
  const [state, setState] = React.useState({
    name: "",
    email: "",
    status: "",
    gender: "male",
  });
  const [user, setUser] = useState({});
  const onSubmit = (event) => {
    event.preventDefault();
    const userInfo = {
      name: state.name,
      email: state.email === "" ? user.email : state.email,
      status: state.status === "" ? user.status : state.status,
      gender: state.gender === "" ? user.gender : state.gender,
    };
    console.log("here");
    console.log(userInfo);
    api
      .patch(`/users/${localStorage.getItem("id")}`, userInfo, {
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

  const onDelete = () => {
    api
      .delete(`/users/${localStorage.getItem("id")}`, {
        headers: {
          Authorization: `Bearer a4c7f6bed06d7e2f739667c1db1e81c8c081077aca1f5e0a03dd91d57703c17f`,
        },
      })
      .then((res) => {
        console.log(res);
        props.history.push("/register");
      });
  };
  useEffect(() => {
    let id = localStorage.getItem("id");
    api
      .get(`/users/${id}`, {
        headers: {
          Authorization: `Bearer a4c7f6bed06d7e2f739667c1db1e81c8c081077aca1f5e0a03dd91d57703c17f`,
        },
      })
      .then((res) => {
        console.log("hello");
        console.log(res.data.data);
        setUser(res.data.data);
        console.log(user);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="form-container">
      <Form onSubmit={onSubmit}>
        <h1>Register</h1>
        <Form.Input
          label="Name"
          placeholder={user.name}
          name="name"
          type="text"
          //   value={user.name}
          error={errors.name ? true : false}
          onChange={onChange}
        />
        <Form.Input
          label="Email"
          placeholder={user.email}
          name="email"
          type="email"
          //   value={user.email}
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
          placeholder={user.status}
          name="status"
          type="status"
          //   value={user.status}
          error={errors.password ? true : false}
          onChange={onChange}
        />
        <Button onClick={() => onSubmit} primary>
          Update User
        </Button>
        <Button
          type="button"
          onClick={() => {
            onDelete();
            logout();
          }}
          secondary
        >
          DELETE USER
        </Button>
      </Form>
    </div>
  );
}

export default UserEdit;
