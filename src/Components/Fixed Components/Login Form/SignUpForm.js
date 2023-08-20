import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import { MyContaxt } from "../../../App";

export const SignUpForm = () => {
  const context = useContext(MyContaxt);

  const {
    register,
    handleSubmit,
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

  const onSubmit = (newUser) => {
    context.users.map((user) => {
      user.email.includes(newUser.email)
        ? Toast.fire({
            icon: "error",
            title: "This email has been taken",
          })
        : Toast.fire({
            icon: "success",
            title: "Signed up successfully. Now you can login in website",
          });
      context.signUp(newUser);
    });
  };

  const [showPass, setShowPass] = useState(false);
  let checkboxHandler = () => {
    setShowPass(!showPass);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label className=" text-primary " htmlFor="name">
            Name
          </label>

          <input
            className="form-control"
            type="text"
            {...register("name", {
              required: true,
              minLength: 5,
              maxLength: 15,
            })}
          />
          {errors.name && errors.name.type === "required" && (
            <span className=" text-danger ">Pleas enter your name</span>
          )}
          {errors.name && errors.name.type === "minLength" && (
            <span className=" text-danger ">Use at leaste 5 characters</span>
          )}
          {errors.name && errors.name.type === "maxLength" && (
            <span className=" text-danger ">Maximum 15 characters</span>
          )}
        </div>

        <div className="form-group">
          <label className=" text-primary " htmlFor="email">
            Email address
          </label>

          <input
            type="email"
            className="form-control"
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

        <div className="form-group">
          <label className=" text-primary " htmlFor="password">
            Password
          </label>

          <input
            type={showPass ? "text" : "password"}
            className="form-control"
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

        <div className="form-group mt-1 ">
          <label className=" text-primary ">Gender</label>
          <select className="form-select " {...register("gender")}>
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="other">other</option>
          </select>
        </div>
        <div className="form-group">
          <input onChange={checkboxHandler} type="checkbox" />
          <label className="mx-1 text-primary ">Show Password</label>
        </div>
        <button className="btn btn-sm btn-primary my-2" type="submit">
          Sign up
        </button>
      </form>
    </>
  );
};

// let timerInterval
// Swal.fire({
//   title: 'Auto close alert!',
//   html: 'I will close in <b></b> milliseconds.',
//   timer: 2000,
//   timerProgressBar: true,
//   didOpen: () => {
//     Swal.showLoading()
//     const b = Swal.getHtmlContainer().querySelector('b')
//     timerInterval = setInterval(() => {
//       b.textContent = Swal.getTimerLeft()
//     }, 100)
//   },
//   willClose: () => {
//     clearInterval(timerInterval)
//   }
// }).then((result) => {
//   /* Read more about handling dismissals below */
//   if (result.dismiss === Swal.DismissReason.timer) {
//     console.log('I was closed by the timer')
//   }
// })
