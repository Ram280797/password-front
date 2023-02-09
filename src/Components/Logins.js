import React from 'react';
import axios from "axios";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { config } from "../config";

function Logins() {
    const navigate = useNavigate();

    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: async (values) => {
        try {
          const user =await axios.post(`${config.api}/login`, values);
          if(user.data.message === 'Success'){
          alert("Successfully Login");
          navigate("/welcome");
        }else{
          alert("incorrect username/password");
        }
        } catch (error) {
          alert("incorrect username/password");
        }
      },
    });
  
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image">
                    <img
                      src="https://cdn.britannica.com/08/177308-050-94D9D6BE/Food-Pizza-Basil-Tomato.jpg"
                      width={"450px"}
                      height={"600px"}
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <form onSubmit={formik.handleSubmit} className="user">
                        <div className="form-group">
                          <input
                            name="email"
                            onChange={formik.handleChange}
                            values={formik.values.email}
                            type="email"
                            className="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address..."
                          />
                        </div>
                        <div className="form-group">
                          <input
                            name="password"
                            onChange={formik.handleChange}
                            values={formik.values.password}
                            type="password"
                            className="form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="Password"
                          />
                        </div>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox small">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck"
                            />
                            <label
                              className="custom-control-label"
                              for="customCheck"
                            >
                              Remember Me
                            </label>
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary btn-user btn-block"
                        >
                          Login
                        </button>
  
                        <hr />
                        <Link
                          to={"/welcome"}
                          className="btn btn-google btn-user btn-block"
                        >
                          <i className="fab fa-google fa-fw"></i> Login with
                          Google
                        </Link>
                        <Link
                          to={"/welcome"}
                          className="btn btn-facebook btn-user btn-block"
                        >
                          <i className="fab fa-facebook-f fa-fw"></i> Login with
                          Facebook
                        </Link>
                      </form>
                      <hr />
                      <div className="text-center">
                        <Link className="small" to={'/forgetpassword'}>
                          Forgot Password?
                        </Link>
                      </div>
                      <div className="text-center">
                        <Link className="small" to={'/register' }>
                          Create an Account!
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Logins