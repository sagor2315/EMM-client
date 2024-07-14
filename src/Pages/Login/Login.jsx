import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

import swal from "sweetalert";

import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const location = useLocation();
  console.log(location);

  const navigate = useNavigate();
  const { signInUser, signWithGoogle } = useContext(AuthContext);
  const [alert, setAlert] = useState("");
  // const [user, setUser] = useState();

  const [emailData, setEmailData] = useState(null);
  const [passData, setPassData] = useState(null);
  const [loginData, setLoginData] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    e.target.email.value = "";
    e.target.password.value = "";
    setEmailData("");
    setPassData("");
    setAlert("");
    setLoginData("");

    signInUser(email, password)
      .then((result) => {
        const users = result.users;
        // setUser(users);
        navigate(location?.state ? location.state : "/");
        console.log(users);
        setLoginData("Login successful!");
        swal("Great!", "Login Successful!", "success");
      })
      .catch((error) => {
        console.error(error);
        const errorMessage = error.message;
        setAlert(errorMessage);
        setEmailData("Email is not valid");
        setPassData("Password is incorrect");
      });
  };

  const handleGoogleLogin = () => {
    signWithGoogle()
      .then((result) => {
        const user = result.user;
        navigate("/");
        console.log(user);
        setLoginData("Login successful");
      })
      .catch((error) => {
        console.error(error);
        const errorMessage = error.message;
        setAlert(errorMessage);
        setEmailData("");
        setPassData("");
      });
  };

  return (
    <div className="flex justify-center items-center mt-10 mb-8 max-w-screen-xl mx-auto">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Login
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Hello! Enter your Email & Password to Login.
        </Typography>
        <form
          onSubmit={handleLogin}
          className="mt-8 mb-2 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              type="email"
              name="email"
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <p>{emailData}</p>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              name="password"
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <span>{passData}</span>
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Remember Me
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button type="submit" className="mt-6 bg-[#2B4F43]" fullWidth>
            sign in
          </Button>
          <Button
            onClick={handleGoogleLogin}
            type="submit"
            className="mt-6 bg-[#2B4F43]"
            fullWidth
          >
            sign in with google
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Are you new to this site?{" "}
            <Link to="/register" className="font-medium text-gray-900">
              Register
            </Link>
          </Typography>
        </form>
        {loginData ? <p>{loginData}</p> : <p>{alert}</p>}
      </Card>
    </div>
  );
};

export default Login;
