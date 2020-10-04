#Image Builder 
FROM node:alpine AS ghost-build
LABEL maintainer="Rinda Gharbi <randa.gharb@gmail.com>" 

ARG BUILD_DATE
ARG BUILD_VERSION

#Labels
LABEL org.label-schema.build-date=$BUILD_DATE \
      org.label-schema.description="On Rewind Events service" \
      org.label-schema.version=$BUILD_VERSION \
      app="OnRewindEvents" \
      service="tcp:3000" 

WORKDIR /app

COPY package.json package.json
RUN yarn
COPY . .

RUN yarn build

#Image Runner
FROM node:alpine
WORKDIR /app
COPY --from=ghost-build /app/ .

CMD ["yarn", "start"]
