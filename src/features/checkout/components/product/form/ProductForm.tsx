"use client";

import { CircleUser, LoaderCircle, Mail, IdCard } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { Input } from "@/shared/components/ui/Input";
import { Label } from "@/shared/components/ui/Label";
import { checkoutSchema, CheckoutSchema } from "../../../schemas/checkoutSchema";
import { Product } from "@/shared/entities/product/Product";
import { PaymentInfo } from "../../payment/info/PaymentInfo";
import { OrderSummary } from "../../summary/order/OrderSummary";
import { Button } from "@/shared/components/ui/Button";
import { formatTaxId } from "@/shared/utils/Formatters";
import { createCheckout } from "../../../actions/checkout/Checkout";
import { useCheckoutFormStore } from "../../../stores/FormStore";
import { MAX_INSTALLMENTS } from "../../../Page";
import { SectionCard, FieldRow, FieldError, FieldHint, InputShell, Prefix } from "@/shared/components/ui/Field";

type ProductFormProps = { product: Product };

export function ProductForm({ product }: ProductFormProps) {
  const router = useRouter();
  const installments = useCheckoutFormStore((s) => s.installments);
  const paymentMethodStore = useCheckoutFormStore((s) => s.paymentMethod);

  const form = useForm<CheckoutSchema>({
    resolver: zodResolver(checkoutSchema),
    mode: "onTouched", // feedback mais cedo sem “gritar”
    defaultValues: {
      fullName: "",
      email: "",
      document: "",
      paymentMethod: "pix",
      termsAccepted: false,
    },
  });

  const { formState, handleSubmit, register, control, setValue } = form;

  useEffect(() => {
    if (paymentMethodStore) setValue("paymentMethod", paymentMethodStore);
  }, [paymentMethodStore, setValue]);

  async function onSubmit(data: CheckoutSchema) {
    try {
      const paymentMethod = form.getValues("paymentMethod");
      if (!paymentMethod) throw new Error("Método de pagamento não encontrado");
      if (!installments && paymentMethod === "credit_card") throw new Error("Parcelas não encontrada");
      if (paymentMethod === "credit_card" && (installments < 1 || installments > MAX_INSTALLMENTS)) {
        throw new Error("Ocorreu um erro ao finalizar sua compra");
      }
      await createCheckout({ ...data, installments, paymentMethod });
      router.push("/checkout/success");
    } catch (err) {
      console.log(err);
    }
  }

  const isSubmitting = formState.isSubmitting;
  const canSubmit = formState.isValid && !isSubmitting;

  // ids para aria-describedby
  const err = {
    fullName: "err-fullname",
    email: "err-email",
    doc: "err-doc",
    terms: "err-terms",
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-4">
      <SectionCard title="Seus dados" icon={<CircleUser className="h-5 w-5 text-muted-foreground" />}>
        <FieldRow>
          {/* Nome */}
          <div>
            <Label htmlFor="fullName">Nome completo</Label>
            <InputShell>
              <Prefix>👤</Prefix>
              <Input
                id="fullName"
                placeholder="Seu nome"
                aria-invalid={!!formState.errors.fullName}
                aria-describedby={formState.errors.fullName ? err.fullName : undefined}
                className="pl-9"
                autoComplete="name"
                {...register("fullName")}
              />
            </InputShell>
            <FieldError id={err.fullName}>{formState.errors.fullName?.message}</FieldError>
          </div>

          <div>
            <Label htmlFor="email">E-mail</Label>
            <InputShell>
              <Prefix><Mail className="h-4 w-4" /></Prefix>
              <Input
                type="email"
                id="email"
                placeholder="seu-email@email.com"
                aria-invalid={!!formState.errors.email}
                aria-describedby={formState.errors.email ? err.email : undefined}
                className="pl-9"
                autoComplete="email"
                {...register("email")}
              />
            </InputShell>
            <FieldHint id="hint-email">Usaremos para enviar o acesso e o comprovante.</FieldHint>
            <FieldError id={err.email}>{formState.errors.email?.message}</FieldError>
          </div>

          <div className="sm:col-span-2">
            <Label htmlFor="document">CPF</Label>
            <Controller
              name="document"
              control={control}
              render={({ field }) => (
                <InputShell>
                  <Prefix><IdCard className="h-4 w-4" /></Prefix>
                  <Input
                    {...field}
                    id="document"
                    placeholder="000.000.000-00"
                    aria-invalid={!!formState.errors.document}
                    aria-describedby={formState.errors.document ? err.doc : undefined}
                    className="pl-9"
                    inputMode="numeric"
                    autoComplete="off"
                    onChange={(e) => field.onChange(formatTaxId(e.target.value))}
                  />
                </InputShell>
              )}
            />
            <FieldError id={err.doc}>{formState.errors.document?.message}</FieldError>
          </div>
        </FieldRow>

        <div className="mt-3 rounded-lg border border-border/60 bg-background/40 p-3">
          <label htmlFor="terms" className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              id="terms"
              className="mt-0.5 h-4 w-4 accent-emerald-500"
              {...register("termsAccepted")}
              aria-describedby={formState.errors.termsAccepted ? err.terms : undefined}
            />
            <span className="text-sm">
              Aceito os termos
              <span className="block text-xs text-muted-foreground">
                Concordo em receber o acesso por e-mail e com a política de reembolso.
              </span>
            </span>
          </label>
          <FieldError id={err.terms}>{formState.errors.termsAccepted?.message}</FieldError>
        </div>
      </SectionCard>

      <PaymentInfo currentPrice={product.currentPrice} deliveryTime={product.deliveryTime} />
      <OrderSummary productBaseValue={product.currentPrice} producerName={product.producer} />

      <Button
        className="w-full mt-4 mb-8 h-12 text-[0.95rem]"
        size="lg"
        type="submit"
        disabled={!canSubmit}
      >
        {!isSubmitting ? (
          "FINALIZAR COMPRA 🚀"
        ) : (
          <span className="inline-flex items-center gap-2">
            <LoaderCircle className="h-4 w-4 animate-spin" />
            Processando…
          </span>
        )}
      </Button>

      {!canSubmit && (
        <p className="mt-[-12px] mb-6 text-center text-xs text-muted-foreground">
          Preencha os campos obrigatórios e aceite os termos para continuar.
        </p>
      )}
    </form>
  );
}
