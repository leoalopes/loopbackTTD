var server = require('./server');
var ds = server.dataSources.db;
ds.automigrate(function(er) {
  if (er) throw er;

  ds.disconnect();
});