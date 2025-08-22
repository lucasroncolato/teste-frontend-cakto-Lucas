import { TypographyParagraph } from "@/shared/components/ui/Headers";
import { PixIcon } from "@/shared/components/icons/Icons";

type Installment = {
  number: number;
  installmentValue: number;
};

type PriceProps = {
  /** preço atual (obrigatório) */
  current: number;
  /** preço “de” (opcional) — mostra risco e economia */
  original?: number | null;
  /** parcela calculada (opcional) */
  installment?: Installment | null;
  /** formatador de moeda (BRL) */
  formatCurrency: (v: number) => string;
  /** texto do label PIX (ex.: “À vista no PIX”) */
  pixLabel?: string;
  /** cor da marca (classe Tailwind) opcional para acentos */
  brandClass?: string; // ex.: "text-emerald-400"
};

export function Price({
  current,
  original = null,
  installment = null,
  formatCurrency,
  pixLabel = "À vista no PIX",
  brandClass = "text-emerald-400",
}: PriceProps) {
  const hasDiscount = !!original && original > current;
  const saveValue = hasDiscount ? original! - current : 0;
  const savePct = hasDiscount ? Math.round((saveValue / original!) * 100) : 0;

  return (
    <div className="mt-3 space-y-1">
      {hasDiscount && (
        <TypographyParagraph className="text-muted-foreground text-sm font-semibold line-through">
          {formatCurrency(original!)}
        </TypographyParagraph>
      )}

      <div className="flex items-baseline gap-2">
        <TypographyParagraph className="text-primary font-extrabold text-2xl sm:text-3xl">
          {formatCurrency(current)}
        </TypographyParagraph>

        {hasDiscount && (
          <span className={`text-xs sm:text-sm ${brandClass} bg-emerald-500/10 border border-emerald-500/30 rounded-full px-2 py-0.5`}>
            Economize {formatCurrency(saveValue)} ({savePct}%)
          </span>
        )}
      </div>

      <div className="text-sm text-muted-foreground flex items-center gap-1.5">
        <PixIcon size={14} />
        <span>{pixLabel}</span>
      </div>

      {installment && (
        <div className="text-sm text-muted-foreground">
          ou em até {installment.number}x de{" "}
          <strong className="font-medium">{formatCurrency(installment.installmentValue)}</strong>{" "}
          no cartão
        </div>
      )}
    </div>
  );
}
