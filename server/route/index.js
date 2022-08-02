const users = require('./routes/users');
const albums = require('./routes/albums');
const photos = require('./routes/photos');
const favorites = require('./routes/favorites');

// DEFAULT API ROUTE HANDLER
module.exports = { 
  users,
  albums,
  photos,
  favorites
};