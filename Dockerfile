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


# Copy nginx template and startup script
COPY nginx.conf.template /etc/nginx/templates/nginx.conf.template
COPY --from=build /app/dist /usr/share/nginx/html

# Create startup script
RUN echo '#!/bin/sh' > /docker-entrypoint.sh && \
    echo 'PORT=${PORT:-80}' >> /docker-entrypoint.sh && \
    echo 'sed "s/\${PORT}/$PORT/g" /etc/nginx/templates/nginx.conf.template > /etc/nginx/nginx.conf' >> /docker-entrypoint.sh && \
    echo 'exec nginx -g "daemon off;"' >> /docker-entrypoint.sh && \
    chmod +x /docker-entrypoint.sh

ENV PORT=80
EXPOSE 80
CMD ["/docker-entrypoint.sh"]

