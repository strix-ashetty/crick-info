
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cricketerSchema } from "@/lib/schema";
import { saveCricketer } from "@/lib/storage";

export default function CricketerForm() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(cricketerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      jerseyNumber: undefined,
      gender: "",
    },
  });

  const onSubmit = (data) => {
    const newCricketer = {
      ...data,
      id: crypto.randomUUID(),
    };

    saveCricketer(newCricketer);

    console.log("Saved successfully:", newCricketer);

    console.log(
      "LocalStorage data:",
      localStorage.getItem("cricketers")
    );

    reset();
  };

return (
  <div className="form-container">
    <div className="form-card">

      <div className="form-header">
        <h1>Add Cricketer</h1>
        <p>Enter the details of the cricketer below.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            placeholder="Enter first name"
            {...register("firstName")}
          />
          <p className="error-message">
            {errors.firstName?.message}
          </p>
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            placeholder="Enter last name"
            {...register("lastName")}
          />
          <p className="error-message">
            {errors.lastName?.message}
          </p>
        </div>

        <div className="form-group">
          <label>Jersey Number</label>
          <input
            type="number"
            placeholder="Enter jersey number"
            {...register("jerseyNumber", {
              valueAsNumber: true,
            })}
          />
          <p className="error-message">
            {errors.jerseyNumber?.message}
          </p>
        </div>

        <div className="form-group">
          <label>Gender</label>
          <select {...register("gender")}>
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <p className="error-message">
            {errors.gender?.message}
          </p>
        </div>

        <button type="submit" className="submit-btn">
          Save Cricketer
        </button>

      </form>
    </div>
  </div>
);
}
