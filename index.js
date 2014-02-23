module.exports = process.env.JSCOV
  ? require('./lib-cov/tw-weather')
  : require('./lib/tw-weather');
