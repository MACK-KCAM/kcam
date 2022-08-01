const mongoose = require('mongoose');

const configs = {
  mongodb: {
      url: '@cluster-zero.8p6g9.mongodb.net', //@---->.[com,net]
      port: 27017,
      username: 'dev',
      password: 'environment',
      collection: 'kcam-dev',
  }
}

class Database {
    constructor(config, mongo) {
        console.log('config passed into constructor' + config);
        this._config = config;
        this._mongo = mongo;
    }

    dbConnection() {
        // console.log(this._config);
        const { mongodb: { url, port, collection, password, username } } = this._config;
        let protocol;
        // IF ADMIN INPUTS LOCALHOST, CHANGE PROTOCOL DEFINITION
        url === 'localhost' || url === '127.0.0.1' ? protocol = 'mongodb://' : protocol = 'mongodb+srv://';
        const uri = (username && password)
            // MODIFY URI SYNTAX BASED ON ADMIN INPUT
            ? `${protocol}${username}:${password}${url}/${collection}`
            : `${protocol}${url}:${port}/${collection}`;
        // INITIATE CONNECTION TO MONGODB
        this._mongo
            .connect(
                uri,
                {useNewUrlParser: true, useUnifiedTopology: true}
            );
        const db = this._mongo.connection;
        db.on('error', console.error.bind(console, 'Connection error:'));
        db.once('open', () => {
            console.log(`Successfully connected to MongoDB cluster: ${uri}`)
        })
        return mongoose;
    }

    get mongo() {
        return this._mongo;
    }

    get config() {
        return this._config;
    }
}

// FREEZE OBJECT TO PREVENT CHANGES TO IT
module.exports = Object.freeze(new Database(configs, mongoose));
