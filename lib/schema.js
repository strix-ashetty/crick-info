
import { z } from "zod";

export const cricketerSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required"),

  lastName: z.string().trim().min(1, "Last name is required"),

  jerseyNumber: z.number({
    error: "Jersey number is required",
  }).int("Must be an integer").nonnegative("Cannot be negative"),

  gender: z.enum(["Male", "Female", "Other"], {
    error: "Please select a gender",
  }),
});
