ARG NODE_BUILD_IMAGE=node:18.12.1-bullseye-slim
ARG NODE_RUN_IMAGE=node:18.12.1-bullseye

### BUILD
FROM $NODE_BUILD_IMAGE as builder

WORKDIR /opt

COPY ./package.json ./
COPY ./yarn.lock ./

ENV PATH /opt/node_modules/.bin:$PATH
RUN apt-get update && apt-get -y install python3 make g++
RUN yarn config set network-timeout 600000 -g
RUN yarn install

COPY . .
RUN yarn build

### RUN
FROM $NODE_RUN_IMAGE AS runtime

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

COPY --from=builder /opt /opt/app
WORKDIR /opt/app

EXPOSE 1337
CMD ["yarn", "start"]
