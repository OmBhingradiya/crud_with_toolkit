import React, { useState } from "react";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editUser } from "./userSlice";
const EditUser = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const users = useSelector((pros) => pros.user);
  const existingUser = users.filter((data) => data.id === params.id);
  const { name, email } = existingUser[0];

  const [values, setValues] = useState({
    name,
    email,
  });

  const handleUpdateUser = () => {
    setValues({ name: "", email: "" });
    dispatch(
      editUser({
        id: params.id,
        name: values.name,
        email: values.email,
      })
    );
    navigate("/");
  };
  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Name"
        inutProps={{ type: "text", placeholder: "John Wick" }}
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
      />
      <br />
      <TextField
        label="Email"
        inutProps={{ type: "email", placeholder: "johnwick007@gmail.com" }}
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
      />
      <Button onClick={handleUpdateUser} children="Update"></Button>
    </div>
  );
};

export default EditUser;
