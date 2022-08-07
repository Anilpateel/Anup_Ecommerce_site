import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import Metadata from "../metadata/Metadata";
import { register } from "../actions/authActions";

const Signup = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, error, isAuthenticated,user } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {}, [dispatch]);

  return (
    <>
      <div className="row wrapper">
        <div className="col-10 col-lg-5">
          <form className="shadow-lg" encType="multipart/form-data">
            <h1 className="mb-3">Register</h1>

            <div className="form-group">
              <label for="email_field">Name</label>
              <input
                type="name"
                id="name_field"
                className="form-control"
                value=""
              />
            </div>

            <div className="form-group">
              <label for="email_field">Email</label>
              <input
                type="email"
                id="email_field"
                className="form-control"
                value=""
              />
            </div>

            <div className="form-group">
              <label for="password_field">Password</label>
              <input
                type="password"
                id="password_field"
                className="form-control"
                value=""
              />
            </div>

            <div className="form-group">
              <label for="avatar_upload">Avatar</label>
              <div className="d-flex align-items-center">
                <div>
                  <figure className="avatar mr-3 item-rtl">
                    <img src="" className="rounded-circle" alt="image" />
                  </figure>
                </div>
                <div className="custom-file">
                  <input
                    type="file"
                    name="avatar"
                    className="custom-file-input"
                    id="customFile"
                  />
                  <label className="custom-file-label" for="customFile">
                    Choose Avatar
                  </label>
                </div>
              </div>
            </div>

            <button
              id="register_button"
              type="submit"
              className="btn btn-block py-3"
            >
              REGISTER
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
