import React, { useEffect, useState } from "react";
import axios from "axios";
import { ReactComponent as Loading } from "../loading.svg";
import { Fragment } from "react";
import { useHistory } from "react-router-dom";

const RegisterPage = () => {
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const token = window?.localStorage.getItem("token");
    if (token) {
      history.replace("/profile");
    }
  }, []);

  const changeEmail = (event) => {
    setEmail(event?.target?.value);
  };

  const changePassword = (event) => {
    setPassword(event?.target?.value);
  };

  const doRegister = async (event) => {
    event?.preventDefault();
    try {
      setIsLoading(true);
      const { data } = await axios.post("http://localhost:8080/users", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      });

      if (data?.message === "sucess") {
        const { data } = await axios.post("http://localhost:8080/login", {
          email: email,
          password: password,
        });

        await window?.localStorage.setItem("token", data?.data?.token);
        setIsLoading(false);
        history.replace("/profile");
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mt-3">
      <form onSubmit={doRegister}>
        <div className="mb-3 row">
          <label for="firstName" className="col-sm-2 col-form-label">
            Last Name
          </label>
          <div className="col-sm-10">
            <input
              onChange={(e) => setFirstName(e?.target?.value)}
              type="text"
              className="form-control"
              id="firstName"
              placeholder="ex. nicolas"
              value={firstName}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label for="lastName" className="col-sm-2 col-form-label">
            First Name
          </label>
          <div className="col-sm-10">
            <input
              onChange={(e) => setLastName(e?.target?.value)}
              type="text"
              className="form-control"
              id="lastName"
              placeholder="ex. nicolas"
              value={lastName}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label for="staticEmail" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              onChange={changeEmail}
              type="email"
              className="form-control"
              id="staticEmail"
              placeholder="ex. admin@domain.com"
              value={email}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label for="inputPassword" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              onChange={changePassword}
              value={password}
              className="form-control"
              id="inputPassword"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
