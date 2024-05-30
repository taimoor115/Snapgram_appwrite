import { z } from "zod";

export const SignupSchema = z.object({
  name: z.string().min(2, { message: "Too Short" }),
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(8, { message: "Password must be 8 characters" }),
});

export const SigninSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: "Enter valid password" }),
});

export const PostSchema = z.object({
  caption: z.string().min(2).max(22000),
  file: z.custom<File[]>(),
  location: z.string().min(2).max(100),
  tags: z.string(),
});
