FROM node:19.5.0-alpine as build

WORKDIR /app
COPY package*.json ./
ENV NODE_TLS_REJECT_UNAUTHORIZED=0
RUN npm config set strict-ssl=false
RUN npm config set registry http://registry.npmjs.org/  
RUN npm config set legacy-peer-deps true
RUN npm install --force
COPY . .
RUN npm run build

FROM wokalek/nginx-brotli:1.27.1

WORKDIR /etc/nginx

# Install openssl for certificate generation
RUN apk add --no-cache openssl

# Generate self-signed SSL certificate
RUN openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout /etc/ssl/private/nginx-selfsigned.key \
    -out /etc/ssl/certs/nginx-selfsigned.crt \
    -subj "/C=US/ST=State/L=City/O=Organization/CN=localhost"

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]

