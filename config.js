const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3001,
  mongoUri: process.env.MONGODB_URI ||
    'mongodb://sampath:sampath123@ds231377.mlab.com:31377/misinfo',
  serverUrl: process.env.serverUrl || 'http://localhost:3001'
}

module.exports =  config;
