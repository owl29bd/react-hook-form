"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Inter } from "next/font/google";

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);

  const handleFormSubmit = (d: any) => {
    console.log(d);
  };

  return (
    <div className="bg-cyan-950 rounded-xl text-black">
      <form
        className="flex flex-col p-5"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <h1 className="text-center pb-5 font-bold">Register</h1>
        <input
          className="rounded my-2 px-2 py-1"
          type="text"
          placeholder="First name"
          {...register("First name", { required: true, maxLength: 80 })}
        />
        <input
          className="rounded my-2 px-2 py-1"
          type="text"
          placeholder="Last name"
          {...register("Last name", { required: true, maxLength: 100 })}
        />
        <input
          className="rounded my-2 px-2 py-1"
          type="text"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          className="rounded my-2 px-2 py-1"
          type="tel"
          placeholder="Mobile number"
          {...register("Mobile number", {
            required: true,
            minLength: 6,
            maxLength: 12,
          })}
        />
        <select
          className="rounded my-2 px-2 py-1"
          {...register("Title", { required: true })}
        >
          <option value="select">Select...</option>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
          <option value="Dr">Dr</option>
        </select>

        <div className="">
          <input
            className="rounded my-2 px-2 py-1"
            {...register("Developer", { required: true })}
            type="radio"
            value="Yes"
          />
          <label className="pl-5 text-white">Developer</label>
        </div>
        <div>
          <input
            className="rounded my-2 px-2 py-1"
            {...register("Developer", { required: true })}
            type="radio"
            value="No"
          />
          <label className="pl-5 text-white">Not a Developer</label>
        </div>

        <input className="rounded my-2 px-2 py-1 bg-pink-300" type="submit" />
      </form>
    </div>
  );
}
