"use server";

import { db } from "@/app/_lib/prisma";
import { deleteFormSchema, DeleteFormSchema } from "./schema";
import { revalidatePath } from "next/cache";

export const deleteProduct = async ({ id }: DeleteFormSchema) => {
  deleteFormSchema.parse({ id });
  await db.product.delete({
    where: {
      id,
    },
  });
  revalidatePath("/products");
};
