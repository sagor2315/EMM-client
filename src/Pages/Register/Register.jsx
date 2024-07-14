import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

import swal from "sweetalert";

import { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const navigate = useNavigate();
  const { createUser } = useContext(AuthContext);

  const [errorData, setErrorData] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photoUrl = e.target.url.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);

    e.target.name.value = "";
    e.target.email.value = "";
    e.target.password.value = "";
    e.target.url.value = "";
    setErrorData("");

    const reg2 = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+|~-]).{6,}$/;

    if (!reg2.test(password)) {
      setErrorData(
        "password should have at least 6 characters and one uppercase (A-Z), one special character (!#$%&?)"
      );
      swal(
        "Oops!",
        "Something wrong! Please try again with valid info",
        "error"
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        navigate("/");

        updateProfile(user, {
          displayName: name,
          photoURL: photoUrl,
        })
          .then((res) => {
            const users = res.users;
            console.log(users);
          })
          .catch((error) => console.error(error));
        console.log(user);
        user
          ? swal("Great!", "Registration successful!", "success")
          : swal("Oops!", "Something wrong, Please try again!", "error");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center mt-10 mb-8 max-w-screen-xl mx-auto">
      <Card color="transparent" shadow={false} className="">
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form
          onSubmit={handleRegister}
          className="mt-8 mb-2  max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name
            </Typography>
            <Input
              name="name"
              size="lg"
              placeholder="Enter your name"
              type="text"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Photo Url
            </Typography>
            <Input
              name="url"
              size="lg"
              placeholder="Enter your photo url"
              type="text"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              type="email"
              name="email"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              name="password"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button type="submit" className="mt-6 bg-[#2B4F43]" fullWidth>
            sign up
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-gray-900">
              Sign In
            </Link>
          </Typography>
        </form>
      </Card>
      <Typography className="text-center mt-3">
        {errorData && <p>{errorData}</p>}
      </Typography>
    </div>
  );
};

export default Register;
