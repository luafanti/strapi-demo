#  Strapi demo starter 🚀

Demo [Strapi](https://github.com/strapi/strapi) starter with PostgreSQL as database and AWS S3 as upload provider. Starter is dockerized and has Helm Chart definition ready for Kubernetes deployment.  

### Local development

##### Requirements

- NPM >= >=6.0.0
- NodeJS >=14.19.1 <=18.x.x
- PostgreSQL >= 10

##### Installation

```
yarn install
```

Start Strapi application with autoReload
```
mv .env.example .env
yarn develop
```

### Docker image

You can use Docker image from one of my registries:
```
docker pull ghcr.io/luafanti/strapi-demo:main
docker pull luafanti/strapi-demo:main
```

Run image
```
docker run -it -p 1337:1337 \
-e APP_KEYS=q/MetH5eiAHEfrGR4/mFjg==,RFZIGjS9YH9uWuoy0QlhdQ==,aBnBcKfZsC1TqyvPfZJ7Rg==,isuxG5awQwJwxyQARiUIxw== \
-e API_TOKEN_SALT=daVkBD8iqnIme7RqJT5OhA== \
-e ADMIN_JWT_SECRET=GVuxLZot1UPlrxng2hyTJw== \
-e JWT_SECRET=x3JFhbjaJzO6wDBxhGK7Pw== \
-e DATABASE_HOST=host.docker.internal \
-e DATABASE_NAME=strapi \
-e DATABASE_USERNAME=strapi \
-e DATABASE_PASSWORD=strapi \
-e DATABASE_SSL=false \
luafanti/strapi-demo::main
```

or using `docker-compose`
```
docker-compose -f infra/docker/docker-compose.yaml up
```

### Helm chart

Install Helm Chart 
```
# using external PostgreSQL instance
helm install starter infra/helm/strapi -f infra/helm/strapi/internal-db-sample-values.yaml

# creating interal PostgreSQL instance
helm install starter infra/helm/strapi -f infra/helm/strapi/external-db-sample-values.yaml
```
