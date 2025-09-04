FROM node:20-alpine

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@10.15.0 --activate

COPY ./package.json ./package.json
COPY ./pnpm-lock.yaml ./pnpm-lock.yaml
COPY ./pnpm-workspace.yaml ./pnpm-workspace.yaml
COPY ./tsconfig.json ./tsconfig.json

COPY ./packages/client/package.json ./packages/client/package.json
COPY ./packages/client/tsconfig.json ./packages/client/tsconfig.json
COPY ./packages/client/tsconfig.node.json ./packages/client/tsconfig.node.json

RUN pnpm install

COPY ./packages/client/src ./packages/client/src
COPY ./packages/client/public ./packages/client/public
COPY ./packages/client/index.html ./packages/client/index.html
COPY ./packages/client/vite.config.ts ./packages/client/vite.config.ts
COPY ./packages/client/svelte.config.js ./packages/client/svelte.config.js

COPY ./packages/client/project.inlang ./packages/client/project.inlang
COPY ./packages/client/messages ./packages/client/messages

EXPOSE 5173
CMD ["pnpm", "dev"]