FROM node:22-alpine

WORKDIR /app

# System deps required by Prisma on Alpine
RUN apk add --no-cache openssl

COPY package.json ./
COPY package-lock.json ./

COPY prisma ./prisma
RUN npm ci

COPY . .

RUN npx prisma generate 

# Ensure ur scripts has build command (inside package.json)
RUN npm run build 

EXPOSE 3000

CMD ["sh", "-c", "npx prisma migrate dev && node dist/index.js"]