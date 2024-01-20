api

npm init-y 

npm install -D nodemon && npm install dotenv express mysql2 bcrypt cors

client 

npm create vite@latest

cd projectname

npm install

npm run dev

# TODO

## logic
- revert change if a query fail
- ajout de category dans la création + adaptation de la requete SQL
- binary en db pour gérer la casse
- changer les response.json
- change JWT secret key to .env
- modifier info user et afficher des statistique
- faire des pages en back office listant les users, article, personnage, catégorie et role et permettant l'éditing 
- faire le visuel de chaque page

## Done
- filtre par catégorie
- afficher les dernier personnage crée sur Home
- Liste des personnage 
- Page de détail
- login
- règle de validition pour éviter les dupli en db lors du register
- CRUD 