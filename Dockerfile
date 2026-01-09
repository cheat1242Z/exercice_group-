# 1. Utiliser Nginx (version ultra-légère alpine) comme serveur web
FROM nginx:alpine

# 2. Copier tous vos fichiers (html, css, js) dans le dossier du serveur
COPY . /usr/share/nginx/html

# 3. Informer Docker que le conteneur écoute sur le port 80
EXPOSE 80
