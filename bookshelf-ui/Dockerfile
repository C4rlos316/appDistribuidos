FROM node:23.11.0-alpine3.21

RUN apk add --no-cache curl 

RUN apk update && apk add git
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs



WORKDIR /app 

#variable de entorno
ENV NODE_ENV=production

#copiar archivos de configuracion
COPY --chown=nextjs:nodejs .next/standalone ./
COPY --chown=nextjs:nodejs .next/static ./.next/static
#podemos conmentar esta linea 
COPY --chown=nextjs:nodejs public ./public


USER nextjs
#exponer el puerto
EXPOSE 3000
ENV PORT=3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 CMD curl --silent --fail --show-error --connect-timeout 3 --max-time 5 http://localhost:3000/ || exit 1

ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]