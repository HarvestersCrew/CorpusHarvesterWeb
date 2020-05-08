module.exports = {
  transpileDependencies: ["vuetify"],
  publicPath:
    process.env.NODE_ENV === "production" && process.env.GITHUB_PAGES
      ? "/CorpusHarvesterWeb/"
      : "/"
};
