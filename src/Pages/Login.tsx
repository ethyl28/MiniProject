import { FormGroup, TextField } from "@mui/material";
import React, { useState, FormEvent } from "react";

interface LoginForm {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const [formValues, setFormValues] = useState<LoginForm>({
    username: "",
    password: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Perform login logic here
    console.log("Logging in with:", formValues);
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <FormGroup onSubmit={handleSubmit}>
        <div>
          <div className="flex justify-start pb-[20px]">
            <h2>Login</h2>
          </div>
          <div>
            <TextField
              label="USERNAME"
              variant="outlined"
              type="text"
              name="username"
              //   value={formValues.username}
              //   onChange={handleInputChange}
            />
          </div>
          <div className="py-[10px]">
            <TextField
              label="PASSWORD"
              variant="outlined"
              type="password"
              name="username"
              //   value={formValues.password}
              //   onChange={handleInputChange}
            />
          </div>
          <div className="flex justify-start">
            <button className="px-2 py-1 text-md rounded-md bg-red-700 text-white">
              Login
            </button>
          </div>
        </div>
      </FormGroup>
    </div>
  );
};

export default Login;
