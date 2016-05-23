function config (key) {
  var
    data = {
      tileWidth: 100,
      tileHeight: 100
    };
  return data[key] || null;
}

module.exports = {
  info: config
};
