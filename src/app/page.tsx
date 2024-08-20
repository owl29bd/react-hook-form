"use client";

import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import RegistrationForm from "./Form01";

export default function App() {
  const { register, control, handleSubmit } = useForm({
    mode: "onChange",
  });

  return (
    <>
      <div className="bg-blue-800 rounded-xl text-sm">
        <form
          className="flex flex-col p-2"
          onSubmit={handleSubmit((d) => console.log(d))}
        >
          <h1 className="text-center">Register</h1>

          <label>First Name</label>
          <input
            type="text"
            {...register("first-name")}
            className="text-black"
          />

          <label>Last Name</label>
          <input
            type="text"
            {...register("last-name")}
            className="text-black"
          />

          <label>Mobile Number</label>
          <input type="email" {...register("email")} className="text-black" />

          <label>Title</label>
          <input {...register("test")} className="text-black" />

          <input type="submit" />
        </form>
        <DevTool control={control} /> {/* set up the dev tool */}
      </div>
      <RegistrationForm />
    </>
  );
}
