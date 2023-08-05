import { z } from "zod";

export const validationSchema = z.object({
  name: z.string({
    required_error: "Name is require",
  }),
  email: z
    .string({
      required_error: "Email is require",
    })
    .email(),
  message: z.string({
    required_error: "Message is require",
  }),
});
