# Teste Front-End Cakto - Lucas Roncolato

Simula a criação de um fluxo de mini-checkout para a venda de um curso digital.  
O foco está na implementação da lógica de negócio — cálculo dinâmico de taxas, atualização em tempo real do resumo do pedido e destaque das opções de maior conversão (PIX).

---

## 🚀 Decisões Técnicas

- **Feature-Based Folders**: a estrutura do projeto organiza os arquivos por funcionalidade.  
  Todo o fluxo de checkout (componentes, tipos e serviços) reside em `src/features/checkout`, facilitando manutenção e escalabilidade.

- **Zustand**: gerencia o estado global com uma API enxuta, garantindo performance e evitando re-renderizações desnecessárias.

- **React Hook Form + Zod**: formulários performáticos e simples, com validação declarativa baseada em esquemas.

- **TailwindCSS**: abordagem utility-first para construir interfaces responsivas e consistentes diretamente no JSX.

- **Framer Motion**: animações fluidas e microinterações para melhorar o feedback visual do usuário.

- **Next.js Server Actions**: lógica sensível executada no servidor sem necessidade de APIs manuais, simplificando a comunicação com o back-end.

- **TypeScript**: tipagem estática para prevenir bugs em tempo de desenvolvimento e documentar melhor as interfaces.

---

## ⚙️ Como Rodar Localmente

Clone o repositório:

```bash
git clone https://github.com/lucasroncolato/teste-frontend-cakto-Lucas
cd teste-frontend-cakto-Lucas
```
Instale as dependências:

```bash
npm install
```
Execute o servidor de desenvolvimento:

```bash
npm run dev
✅ Testes
```
Testes unitários:

```bash
npm test
```
Testes end-to-end com Playwright:

```bash
npm run e2e
```

## 💡 Resposta Bônus
Se tivesse mais tempo, o que faria para aumentar a conversão deste checkout?

Adicionar elementos de confiança, como selos de “Compra Segura” e logos das bandeiras de cartão.

Inserir um contador regressivo para a oferta ou mensagens de “últimas vagas com este preço”, incentivando a decisão imediata.

Criar uma automação de follow-up por e-mail para quem começa o checkout e não conclui, oferecendo um lembrete ou incentivo adicional.