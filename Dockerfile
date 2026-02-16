# Stage 1: Build
FROM node:22-slim AS builder

WORKDIR /app

# copy package files first to leverage caching
COPY package*.json ./

RUN npm install

# grab the rest of the source
COPY . .

# build the project (gets us the dist folder)
RUN npm run build

# Stage 2: Production Runtime
FROM node:22-slim

# curl is useful for the healthcheck probe
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# standard production setup
ENV NODE_ENV=production
ENV PORT=3000

# only need the build artifacts and prod deps
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist

# skip the dev dependencies to keep image size down
RUN npm install --omit=dev

# healthcheck to make sure the app is responding
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/healthz || exit 1

EXPOSE 3000

CMD ["node", "dist/index.js"]
