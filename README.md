# CorpusHarvesterWeb

This is the web client of the [Corpus Harvester](https://github.com/HarvestersCrew/CorpusHarvester). Instructions on how to use the server are available on the main repo.

## Web client

The web client is made with Node in Vue.js. If you wish to run it, you have the possibility to build it yourself if you have Node installed, or through Docker.

### Node

Type `npm install` and `npx vue-cli-service build`. You then have a `dist/` folder you can distribute via a HTTP server. For the convenience, a dev package is also given with the packages. Run it with `npx http-server dist/ -p 8080 --proxy "http://localhost:8080?"` (by adapting the two ports if necessary). You'll need to have the server running, either via Docker or natively.

### Docker

A Dockerfile is provided which can build an image with a server to serve the web client. Simply run `docker build -t IMAGE_NAME .` then `docker run -d -p 8080:8080 --name CONTAINER_NAME IMAGE_NAME`. It starts the container in detached mode so it works in background. You can reach the web client on [localhost:8080](http://localhost:8080). Run `docker kill CONTAINER_NAME` to end it.

### Github Pages

If you have server running, you can use the page hosted [here](https://harvesterscrew.github.io/CorpusHarvesterWeb/). It is updated with each repo update.
