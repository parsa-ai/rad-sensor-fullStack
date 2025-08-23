FROM node:18-alpine

WORKDIR /app

RUN apk add --no-cache libc6-compat

COPY package*.json ./

RUN npm ci

COPY . .

ENV NODE_ENV=production

ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

RUN addgroup --system --gid 1001 nodejs

RUN adduser --system --uid 1001 nextjs

RUN chown -R nextjs:nodejs /app

USER nextjs

EXPOSE 3000

CMD ["npm", "start"]
