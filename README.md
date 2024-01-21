# Pour installer le projet :

## API :

Depuis la racine : 

``` bash

cd api

npm install

```

Créer un fichier .env et compléter les champs

``` bash
touch .env
```

```
LOCAL_PORT=XXXX
DB_HOST=yourhost
DB_NAME=yourDatabaseName
DB_USER=yourLogin
DB_PASS=yourPassword
```

## client 

Depuis la racine : 

``` bash

cd client

npm install

```

## SQL 

Pour installer la database, importer le fichier `wiki-list.sql` dans phpMyAdmin

## Démarer le projet 

Dans les dossiers client ET api simulatanement

``` bash
npm run dev
```
