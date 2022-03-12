module.exports = class websiteError extends Error {
  constructor(message, infos) {
    super(message);
    this.infos = infos;
  }
};
