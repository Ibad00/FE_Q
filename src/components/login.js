import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import axios from "axios";
import { NotificationManager } from "react-notifications";
import { useDispatch } from "react-redux";
import { login } from "../redux/user.reducer";

const Login = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "jivynosyfu@mailinator.com",
      password: "Pa$$w0rd!",
      social_auth_type: "normal",
    },
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("email", values.email);
      formData.append("password", values.password);
      formData.append("social_auth_type", "normal");
      const response = await axios.post(
        "https://sandbox.practical.me/api/login",
        formData,
        {
          headers: {
            "content-Type": "multipart/form-data",
          },
        }
      );
      if (response.data.message === "User loggedIn successfully" && response.status === 200) {
        NotificationManager.success("Logged In");
        dispatch(login(response.data.data.auth_token));
      } else {
        NotificationManager.error("Login Failed");
      }
    },
  });

  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={formik.handleSubmit}
    >

      <TextField
        onChange={formik.handleChange}
        value={formik.values.email}
        name="email"
        label="Email"
        variant="filled"
      />
      <TextField
        onChange={formik.handleChange}
        value={formik.values.password}
        name="password"
        label="Password"
        type="password"
        variant="filled"
      />
      
      <Button type="submit" variant="contained">
        Login
      </Button>
    </form>
  );
};

export default Login;
