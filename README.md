# Docker strapi / nextjs



## Projet

Le projet est composé d'un back basé sur strapi et d'un front en nextjs. Un docker-compose permet de faire tourner l'ensemble du système sur la machine hôte de l'utilisateur.

## Getting started

```
mv .env.example .env
docker-compose up
```

C'est tout !

Le fichier .env doit conteni les variables suivantes:

```
DATABASE_HOST=db (correspond au nom du service postgre)
DABASE_PORT=5433
DATABASE_USERNAME=user
DATABASE_NAME=dbname
DATABASE_PASSWORD=password
```

Se rendre sur la page http://localhost:8080 pour afficher le blog.

L'administration du blog se fait sur la page http://localhost:1337/admin de votre machine hôte.

Identifiant:  
admin@yoursite.com  
Password0

## Composition du docker-compose

Le fichier est composé de 3 services (db, back, front) qui peuvent communiquer entre eux via le réseau partagé app-network.  

Le conteneur postgres se base sur l'image postgres. Un script sql est exécuté à l'instanciation de ce conteneur, ce qui permet de commencer le développement avec un jeu de données. Les données sont ensuite sauvegardées dans le dossier ./db_data de la machine hôte.  

Les fichiers docker du back et du front sont basés sur une image node slim qui contient uniquement les packages nécessaire pourfaire tourner node. Les services sont exécutés en mode develop.  

Les services ont un volume partagé avec la machine hote ce qui permet de pouvoir travailler en local sur sa machine.