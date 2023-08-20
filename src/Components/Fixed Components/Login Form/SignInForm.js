import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import { MyContaxt } from "../../../App";

export const SignInForm = (props) => {
  const context = useContext(MyContaxt);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  const onSubmit = (login) => {
    // let user = context.map((q) => {
    //   return q;
    // });
    // if (user.email === login.email && user.password === login.password) {
    //   console.log("logedin");
    // } else {
    //   console.log("wronge");
    // }
    context.users.find((user) => {
      if (user.email === login.email && user.password === login.password) {
        Toast.fire({
          icon: "success",
          title: "Wellcom Back " + user.name,
        });
        context.currentUser(user);
        props.onIsLogedin();
      }
    });
  };
  // else if (
  //   user.email !== login.email ||
  //   user.password !== login.password
  // ) {
  //   Toast.fire({
  //     icon: "error",
  //     title: "Email or Password is wrong",
  //   });
  const [showPass, setShowPass] = useState(false);
  let checkboxHandler = () => {
    setShowPass(!showPass);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label className=" text-primary " htmlFor="email">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            defaultValue={"ali@email.com"}
            {...register("email", {
              required: true,
              pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            })}
          />
          {errors.email && errors.email.type === "required" && (
            <span className=" text-danger ">Pleas enter valid email</span>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <span className=" text-danger ">
              Pleas enter your email in format: example@gmail.com
            </span>
          )}
        </div>
        <div>
          <label className=" text-primary " htmlFor="password">
            Password
          </label>
          <input
            type={showPass ? "text" : "password"}
            className="form-control"
            defaultValue={"Ali1380A"}
            {...register("password", {
              minLength: 5,
              maxLength: 15,
              required: true,
              pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/i,
            })}
          />
          {errors.password && errors.password.type === "required" && (
            <span className=" text-danger ">Pleas enter password</span>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <span className=" text-danger ">Use at leaste 5 characters</span>
          )}
          {errors.password && errors.password.type === "maxLength" && (
            <span className=" text-danger ">Maximum 15 characters</span>
          )}
          {errors.password && errors.password.type === "pattern" && (
            <span className=" text-danger ">
              Pleas enter tour password in format: eXample1
            </span>
          )}
        </div>
        <div className="form-group">
          <input onChange={checkboxHandler} type="checkbox" />
          <label className="mx-1 text-primary ">Show Password</label>
        </div>
        <button className="btn btn-sm btn-primary my-2" type="submit">
          Login
        </button>
        <a
          onClick={() => Swal.fire("Im sorry. Be more careful next time :)")}
          className=" btn btn-link"
        >
          Forget your email?
        </a>
      </form>
    </>
  );
};

// I am sorry. Be more careful next time
