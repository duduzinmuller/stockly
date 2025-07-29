import z from "zod";

export const deleteFormSchema = z.object({
  id: z.string().uuid(),
});

export type DeleteFormSchema = z.infer<typeof deleteFormSchema>;
