let configData = {
  tileWidth: 100,
  tileHeight: 100
};

function config (key) {
  return configData[key] || null;
}

module.exports = {
  info: config
};
