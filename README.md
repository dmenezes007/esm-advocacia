# ESM Advocacia Especializada

Aplicação web institucional em React + TypeScript com foco em apresentação de serviços jurídicos,
conteúdos, contato, agendamento e portal do cliente.

## Tecnologias

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router

## Execução local

Pré-requisito: Node.js 20+

1. Instale as dependências:
   `npm install`
2. Copie `.env.example` para `.env.local` e ajuste variáveis, se necessário.
3. Rode em desenvolvimento:
   `npm run dev`

## Build de produção

- Gerar build: `npm run build`
- Pré-visualizar build: `npm run preview`

## Publicação no GitHub

Para repositório em subpasta (ex.: `https://usuario.github.io/esm-advocacia/`):

1. Defina a variável de ambiente de build:
   `VITE_BASE_PATH=/esm-advocacia/`
2. Execute `npm run build`.
3. Publique o conteúdo de `dist/` no GitHub Pages.

Para domínio raiz/custom domain, mantenha `VITE_BASE_PATH=/`.

## Publicação no Vercel

Este projeto já está preparado para Vercel com roteamento SPA via `vercel.json`.

1. Importe o repositório no Vercel.
2. Framework preset: `Vite`.
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. Variáveis de ambiente opcionais: `GEMINI_API_KEY`, `APP_URL`, `VITE_BASE_PATH` (normalmente `/` no Vercel).
