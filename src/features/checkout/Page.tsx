import { getProduct } from "./actions/product/getProduct";
import { ProductInfo } from "./components/product/info/ProductInfo";
import { ProductForm } from "./components/product/form/ProductForm";
import LoadingGate from "@/shared/components/LoadingGate/LoadingGate";
import { ProductInfoSkeleton } from "@/shared/components/price/ProductInfoSkeleton";
import { ProductFormSkeleton } from "@/shared/components/payment/ProductFormSkeleton";

export const MAX_INSTALLMENTS = 12;

export async function CheckoutPage({ productId }: { productId: string }) {
  const product = await getProduct(productId); 

  return (
    <div className="space-y-6">
      <LoadingGate minDelay={400} skeleton={<ProductInfoSkeleton />}>
        <ProductInfo product={product} />
      </LoadingGate>

            <LoadingGate minDelay={350} skeleton={<ProductFormSkeleton />}>
        <ProductForm product={product} />
      </LoadingGate>
    </div>
  );
}
