import React from "react";
import { InputText } from "primereact/inputtext";
import "/node_modules/primeflex/primeflex.css";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";
import { Button } from "primereact/button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";

export default function SignUp() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("required!"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
    }),
    onSubmit: (values) => {
      console.log("Form Submitted", values);
      navigate("/")
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex justify-content-between align-items-center flex-column p-3 bg-white"
       
    >
      <Link to="/">
        <div>
          <img
            src="https://assets.aboutamazon.com/2e/d7/ac71f1f344c39f8949f48fc89e71/amazon-logo-squid-ink-smile-orange.png"
            width="100px"
            height="40px"
            alt="Amazon Logo"
          />
        </div>
      </Link>
      <div
        className="border-1 border-round p-4 flex h-100rem w-22rem flex-column justify-content-around"
        style={{ borderColor: "#d3d3d3" }}
      >
        <div className="text-xl">
          <h3>Create Account</h3>
        </div>

        <div className="card flex flex-column">
          <h5>Email</h5>
          <InputText
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Email or Phone Number"
            className="mb-2"
          />
          {formik.touched.email && formik.errors.email ? (
            <small className="p-error">{formik.errors.email}</small>
          ) : null}
        </div>

        <div className="card flex flex-column">
          <h5>Name</h5>
          <InputText
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Name"
            className={`mb-2 ${
              formik.touched.name && formik.errors.name ? "p-invalid" : ""
            }`}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="card flex flex-column">
          <h5>Password</h5>
          <InputText
            id="password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Password"
            className={`mb-2 ${
              formik.touched.password && formik.errors.password
                ? "p-invalid"
                : ""
            }`}
          />

          {formik.touched.password && formik.errors.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : null}
        </div>

        <div className="card flex flex-column">
          <h5>Re-Enter Password</h5>
          <InputText
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Re-Enter Password"
            className="mb-2"
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className="error">{formik.errors.confirmPassword}</div>
          ) : null}
        </div>

        <div className="card flex  justify-content-center">
          <Button
            type="submit"
            className="bg-yellow-500 mb-5 w-full justify-content-center hover:bg-yellow-400 border-yellow-500"
       
          >
            Continue
          </Button>
        </div>
        <div className="mb-5">
          <small>
            By creating an account, you agree to{" "}
            <Link>Amazon's Conditions of Use</Link> and{" "}
            <Link>Privacy Notice</Link>.
          </small>
        </div>
        <Divider className="mb-2" />
        <div>
          <small>Buying for work?</small>
        </div>
        <div className="mb-2">
          <Link>Create a free business account</Link>
        </div>
        <div>
          <small>Already have an account?</small>
          <Link to="/SignIn">
            <small>Sign In</small>
          </Link>
        </div>
      </div>
    </form>
  );
}
