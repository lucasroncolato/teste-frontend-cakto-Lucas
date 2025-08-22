import Image from "next/image";
import { TypographyH3 } from "@/shared/components/ui/Headers";
import { formatCurrencyBRL } from "@/shared/utils/Formatters";
import { calculateInstallments } from "../../../helpers/calculateInstallments";
import { MAX_INSTALLMENTS } from "../../../Page";
import { Product } from "@/shared/entities/product/Product";
import { Badge } from "@/shared/components/ui/Badge";
import { Clock, GlobeIcon, UserIcon } from "lucide-react";
import { Price } from "@/shared/components/price/Price";

type ProductInfoProps = { product: Product };

export function ProductInfo({ product }: ProductInfoProps) {
  const installments = calculateInstallments(product.currentPrice, MAX_INSTALLMENTS);
  const lastInstallment = installments[installments.length - 1];

  const hasDiscount = product.originalPrice > product.currentPrice;
  const saveValue = hasDiscount ? product.originalPrice - product.currentPrice : 0;
  const savePct = hasDiscount ? Math.round((saveValue / product.originalPrice) * 100) : 0;

  return (
    <section aria-labelledby="product-title" className="mt-4">
      <div className="flex flex-col gap-4 sm:flex-row">
        <figure
          className="relative w-full sm:w-64 rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-emerald-700/30 via-emerald-600/20 to-emerald-500/10 ring-1 ring-emerald-700/20  "
        >
          <div className="aspect-[4/3]">
            <Image
              src={product.imageUrl ?? "https://framerusercontent.com/images/dwsUDbqeEUic6MtNScUrnTEIJY.webp"}
              alt={product.name}
              fill
              className="object-contain"
              sizes="(min-width: 640px) 16rem, 100vw"
              priority
            />
          </div>
          <figcaption className="sr-only">{product.name}</figcaption>
        </figure>


        {/* Texto */}
        <div className="flex flex-1 flex-col">
          {/* Badges compactas */}
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <Badge variant="default" className="gap-1.5 px-2.5 py-1 text-xs">
              <UserIcon size={14} />
              <span className="capitalize">{product.producer}</span>
            </Badge>
            <Badge variant="secondary" className="gap-1.5 px-2.5 py-1 text-xs">
              <GlobeIcon size={14} />
              <span className="capitalize">{product.format}</span>
            </Badge>
            <Badge variant="secondary" className="gap-1.5 px-2.5 py-1 text-xs">
              <Clock size={14} />
              <span>Acesso {product.deliveryTime}</span>
            </Badge>
            {hasDiscount && (
              <Badge variant="default" className="gap-1.5 px-2.5 py-1 text-xs">
                🔥 {savePct}% OFF
              </Badge>
            )}
          </div>

          {/* Título */}
          <TypographyH3 className="leading-tight">
            {product.name}
          </TypographyH3>

          {/* Preços + condições */}

          <Price
            current={product.currentPrice}
            original={product.originalPrice}
            installment={lastInstallment} // { number, installmentValue }
            formatCurrency={formatCurrencyBRL}
            pixLabel="À vista no PIX"
            brandClass="text-emerald-400"
          />
        </div>
      </div>
    </section>
  );
}
