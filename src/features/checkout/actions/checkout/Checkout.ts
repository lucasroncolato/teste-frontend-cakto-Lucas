import { CheckoutSchema } from "../../schemas/checkoutSchema";

interface CreateCheckoutParams extends CheckoutSchema {
  installments: number;
}

// mocked POST action
export async function createCheckout(data: CreateCheckoutParams) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log("post finalized with payload:", data);
}
