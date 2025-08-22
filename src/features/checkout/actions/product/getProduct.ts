"use server";

import { Product } from "@/shared/entities/product/Product";

// Return mocked product
export async function getProduct(id: string): Promise<Product> {
  console.debug(`Getting product with id ${id}...`);
  return {
    id: 1,
    imageUrl: "https://framerusercontent.com/images/dwsUDbqeEUic6MtNScUrnTEIJY.webp",
    name: "Curso de Marketing Digital 2025",
    originalPrice: 497.0,
    currentPrice: 297.0,
    producer: "João Silva",
    format: "digital",
    deliveryTime: "imediato",
  };
}
