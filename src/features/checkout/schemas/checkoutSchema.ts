import { z } from 'zod';

export const checkoutSchema = z.object({
  fullName: z.string().min(3, 'Nome completo obrigatório'),
  email: z.string().email('E-mail inválido'),
  document: z.string().min(11, 'Documento inválido'),
  paymentMethod: z.enum(['pix', 'credit_card', 'boleto']),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: 'Você precisa aceitar os termos' }),
  }),
});

export type CheckoutSchema = z.infer<typeof checkoutSchema>;
