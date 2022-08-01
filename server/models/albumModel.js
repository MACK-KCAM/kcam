const Database = require('../dbConfigs');
const { Schema } = require('mongoose');

const { mongo: { model } } = Database;

const albumSchema = new Schema({
  albumId: Number,
  name: String,
  description: String,
  photos: [String],
  date: Date
});

module.exports = {
  albumSchema: albumSchema,
  albumModel: model('albumModel', albumSchema)
}
