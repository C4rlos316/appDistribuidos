# Pasos para construir y ejecutar bookshelf-ui con Docker y Prettier


## Instalar Prettier

Esto se instala dentro del contenedor debes estar en la carpeta bookshelft-ui


```bash
npm install --save-dev prettier
```

Agrega en `package.json`:

```json
"scripts": {
  "format": "prettier --write .",
  "check-format": "prettier --check ."
}
```
## Crear archivo llamado `.prettierrc.json`:


```json
{
  "singleQuote": true,
  "jsxSingleQuote": true,
  "trailingComma": "all",
  "semi": true,
  "bracketSpacing": true,
  "tabWidth": 2,
  "printWidth": 100
}
```

## Crear la carpeta para los archivos binarios para el contenedor `next.config.mjs`

```bash


/** @type {import('next').NextConfig} */
const nextConfig = {
  //Genera un directorio .next en la raiz del proyecto para saber donde se guardo la compilacion
  output: 'standalone',
};

export default nextConfig;

```


Usar esto en la terminal del contendor, esto cambiara los archivos que no tengan el formato adecuado:

```bash
npm run check-format    # Verifica formato
npm run format          # Corrige formato
```

---

# Crear el contenedor

Esto se hace desde el archivo local 


##  Verificar que tienes Node.js y npm instalados

Verifica:

```bash
node -v
npm -v
```

---

Si no están instalados:

```bash
sudo apt update
sudo apt install nodejs npm
```

Verifica:

```bash
node -v
npm -v
```

---


##  Generar build de producción

```bash
npm install
npm run build
```

Esto genera `.next/standalone` y `.next/static`.

---

##  4. Crear imagen Docker

Asegúrarse que se tiene el Dockerfile algo como :

```Dockerfile
FROM node:23.11.0-alpine3.21

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

WORKDIR /app

ENV NODE_ENV=production

COPY --chown=nextjs:nodejs .next/standalone ./
COPY --chown=nextjs:nodejs .next/static ./.next/static
COPY --chown=nextjs:nodejs public ./public

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
```

## Construir la imagen:

```bash
docker build -t bookshelf-ui:v1.0.0 .
```

Verificar:

```bash
docker images
```

---

## Ejecutar el contenedor

```bash
docker run --name bookshelf-ui -d -p 3001:3000 bookshelf-ui:v1.0.0
```

Verifica:

```bash
docker ps
```

Abre en navegador:

```
http://localhost:3001
```

---

## Si se hacen cambios usamos esto 

```bash
docker stop bookshelf-ui
docker rm bookshelf-ui

npm run build
docker build -t bookshelf-ui:v1.0.0 .
docker run --name bookshelf-ui -d -p 3001:3000 bookshelf-ui:v1.0.0
```