import { TextField, Button } from "@mui/material";
import "./form.css";
import { useContext, useState } from "react";
import UserContext from "../../contexts/userContext";

export default function Login() {
  const { login } = useContext(UserContext);
  const [username, setUsername] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();
  // Custom forceUpdate

  const handleLogin = (e) => {
    e.preventDefault();
    login(username, userEmail, userPassword);
    console.log(
      `User ${username}, password ${userPassword}, email ${userEmail}`
    );
  };
  return (
    <form action="" className="formWrapper" onSubmit={handleLogin}>
      <h2>Login</h2>
      <TextField
        label="Email"
        required
        variant="filled"
        color="primary"
        type="email"
        onChange={(e) => setUserEmail(e.target.value)}
        sx={{ mb: 3 }}
      />
      <TextField
        label="Name"
        required
        variant="filled"
        color="primary"
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        sx={{ mb: 3 }}
      />
      <TextField
        label="Password"
        required
        variant="filled"
        color="primary"
        type="password"
        onChange={(e) => setUserPassword(e.target.value)}
        sx={{ mb: 3 }}
      />
      <Button variant="outlined" color="secondary" type="submit">
        Login
      </Button>
    </form>
  );
}
