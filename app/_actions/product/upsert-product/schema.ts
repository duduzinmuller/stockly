import { z } from "zod";

export const upsertProductSchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string().trim().min(1, {
    message: "O nome do produto é obrigatório",
  }),
  price: z.number().min(0.01, {
    message: "O preço do produto é obrigatório",
  }),
  stock: z.coerce
    .number()
    .positive({
      message: "A quantidade do produto deve ser maior que 0",
    })
    .int()
    .min(0, {
      message: "O estoque do produto é obrigatório",
    }),
});

export type UpsertProductSchema = z.infer<typeof upsertProductSchema>;
