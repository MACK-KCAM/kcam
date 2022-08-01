const Database = require('../dbConfigs');
const { Schema } = require('mongoose');
const { albumSchema } = require('./albumModel');

const { mongo: { model } } = Database;

const userSchema = new Schema({
  _id: {type: Schema.Types.ObjectId, required: false},
  authId: {type: String, required: false},
  firstName: String,
  lastName: String,
  albums: [albumSchema],
  favorites: [[]],
  global: [String],
  currentAlbumId: Number
});   

// currentAlbumId exists in case the user decides to delete an album

module.exports = {
  userSchema: userSchema,
  userModel: model('userModel', userSchema, 'users') // THIRD PARAMETER DEFINES DEFAULT COLLECTION NAME
}


// {
//   "authId": "0x001",
//   "firstName": "Chris",
//   "lastName": "Jamali",
//   "images": {
//       "0":{
//         "name": "album1",
//         "description": "france",
//         "photos": ["image1.jpg", "image2.png"],
//       },
//       "1":{
//         "name": "album2",
//         "description": "greece",
//         "photos": ["image3.jpg", "image4.png"],
//       },
//   },
//   "favorites": [["0", "image1.jpg"]],
//   "currentAlbumId": 1
// }
