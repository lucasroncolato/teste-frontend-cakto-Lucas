"use client";
import { Button } from "@/shared/components/ui/Button";
import { useRouter } from "next/navigation";

export function ActionButtons() {
  const router = useRouter();

  function handleBack() {
    router.push("/checkout/1");
  }

  return (
    <div className="flex gap-2 items-center justify-center mt-4">
      <Button variant="outline" onClick={handleBack}>
        Voltar para o produto
      </Button>
    </div>
  );
}
