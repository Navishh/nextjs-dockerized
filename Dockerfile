FROM node:18-alpine AS base

# Set working directory and install dependencies
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Copy source code and build Next.js app
COPY . .
RUN npm run build

# Expose the app on port 4000
EXPOSE 4000
ENV PORT 4000
ENV HOSTNAME 0.0.0.0

# Run the Next.js server in production
CMD ["npm", "start"]
