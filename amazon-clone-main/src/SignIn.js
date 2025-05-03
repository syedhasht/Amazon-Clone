import React from "react";
import { InputText } from "primereact/inputtext";
import "primeflex/primeflex.css";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";
import { Button } from "primereact/button";
import { useFormik } from "formik";

import { useNavigate } from "react-router";
import * as Yup from "yup";

const BasicDemo = () => {
    const navigate=useNavigate()
  // Formik configuration
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log("Form Submitted", values);
      navigate('/')
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex justify-content-between align-items-center flex-column p-3 bg-white"
    >
      {/* Amazon Logo */}
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

      {/* Sign In Form */}
      <div
        className="border-1 border-round p-4 flex h-28rem w-22rem flex-column justify-content-around"
        style={{ borderColor: "#d3d3d3" }}
      >
        <div className="text-xl">
          <h3>Sign In</h3>
        </div>

        {/* Email Field */}
        <div className="card flex flex-column">
          <InputText
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Email or Phone Number"
            className={`mb-2 ${
              formik.touched.email && formik.errors.email ? "p-invalid" : ""
            }`}
          />
          {formik.touched.email && formik.errors.email ? (
            <small className="p-error">{formik.errors.email}</small>
          ) : null}
        </div>

        {/* Password Field */}
        <div className="card flex flex-column">
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
            <small className="p-error">{formik.errors.password}</small>
          ) : null}
        </div>

        {/* Continue Button */}
        <div>
          <div className="card flex justify-content-center">
            <Button
              type="submit"
              className="bg-yellow-500 w-full justify-content-center hover:bg-yellow-400 border-yellow-500"
            >
              Continue
            </Button>
          </div>
        </div>

        {/* Additional Text */}
        <div className="font-light text-xs">
          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
        </div>
        <div className="font-light">
          <p>Need help?</p>
        </div>
        <Divider />
        <div>
          <h5>Buying for work?</h5>
          <p className="font-light text-sm">Shop on Amazon Business</p>
        </div>
      </div>

      {/* New to Amazon? Section */}
      <div className="font-light text-xs w-22rem mt-3 w-full">
        <Divider textAlign="center">New to Amazon?</Divider>
      </div>
      <div className="font-light text-xs w-22rem mt-3 w-full">
        
          <div className="card flex justify-content-center">
          <Button
            className="bg-yellow-500 no-underline w-full justify-content-center hover:bg-yellow-400 border-yellow-500"
            onClick={() => navigate('/sign-up')} // Use an absolute path
        >
            Create New Account
        </Button>
          </div>
     
      </div>
    </form>
  );
};

export default BasicDemo;
