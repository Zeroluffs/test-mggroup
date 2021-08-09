import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import "../App.css";


const api = axios.create({
  baseURL: `https://gorest.co.in/public/v1`,
});

function CreatePost(props) {
  const [errors, ] = useState({});
  const [state, setState] = React.useState({
    title: "",
    body: "",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    const userPost = {
      title: state.title,
      body: state.body,
    };
    console.log(userPost);
    api
      .post(`/users/${localStorage.getItem("id")}/posts`, userPost, {
        headers: {
          Authorization: `Bearer a4c7f6bed06d7e2f739667c1db1e81c8c081077aca1f5e0a03dd91d57703c17f`,
        },
      })
      .then((res) => {
        console.log(res);
        props.history.push("/posts");
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
        <h1>Create post</h1>
        <Form.Input
          label="Title"
          placeholder="Title.."
          name="title"
          type="text"
          //   value={values.username}
          error={errors.title ? true : false}
          onChange={onChange}
        />
        <Form.Input
          label="Body"
          placeholder="Body.."
          name="body"
          type="body"
          //   value={values.email}
          error={errors.body ? true : false}
          onChange={onChange}
        />

        <Button type="submit" primary>
          Create Post
        </Button>
      </Form>
    </div>
  );
}
export default CreatePost;
