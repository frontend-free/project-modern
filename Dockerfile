FROM node:22.14.0 AS builder

ENV PNPM_HOME="/pnpm"
ENV PATH="${PNPM_HOME}:${PATH}"
ENV HUSKY=0

RUN corepack enable && corepack prepare pnpm@10.18.2 --activate

WORKDIR /app

COPY . .
RUN pnpm install --frozen-lockfile
RUN pnpm build

FROM nginx:1.27-alpine AS runner

COPY --from=builder /app/apps/agent/dist /usr/share/nginx/html/agent/dist
COPY nginx.conf /etc/nginx/conf.d/default.conf
