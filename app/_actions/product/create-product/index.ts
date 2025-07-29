"use server";

import { db } from "@/app/_lib/prisma";
import { createProductSchema, CreateProductSchema } from "./schema";
import { revalidatePath } from "next/cache";

export const CreateProduct = async (data: CreateProductSchema) => {
  createProductSchema.parse(data);
  await db.product.create({
    data
  });
  revalidatePath("/products");
};
