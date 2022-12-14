const router = require('../router');
const { userModel: { userModel } } = require('../../models');

router.route('/albums')
    .get(async (req, res) => {
      console.log(`Received ${req.method} request at api/albums`)
      if (!req.query) {
        const error = {
          status: 500,
          message: "Nothing found in request query"
        }
        res.status(error.status).json(error);
      }
      const { authId, albumId } = req.query;
      try {
        // FETCH ALBUM ASSOCIATED WITH AUTH ID BY ITS ID NUMBER
        let response = await userModel.findOne(
          { authId: authId, 'albums.albumId': albumId },
          { 'albums.$': 1}
        );
        response = response.albums[0];
        console.log(response)
        console.log('Documents successfully retrieved from MongoDB');
        res.json(response);
      } catch (err) {
        const error = {
          status: 500,
          message: `Unable to fulfull GET request: ${err}`
        };
        console.log(err);
        res.status(error.status).json(error);
      }
    })
    // POST: authId, images[i] vs name, srcUrl (upload on the frontend)
    .post(async (req, res) => {
      console.log(`Received ${req.method} request at api/albums`)
      if (!req.body) {
        const error = {
          status: 500,
          message: "Nothing found in request body"
        }
        res.status(error.status).json(error);
      }
      // ADD NEW EMPTY ALBUM TO USER DOCUMENT
      const { authId, name, description } = req.body;
      try {
        // FETCH USER DOCUMENT IN ORDER TO DETERMINE CURRENT ALBUM ID NUMBER
        let currentAlbumId = await userModel.find({ authId: authId });
        currentAlbumId = currentAlbumId[0].currentAlbumId;
        // ADD ALBUM PROPERTY TO USER DOCUMENT WITH CURRENTALBUMID + 1 AS KEY
        const response = await userModel.updateMany(
          { authId: authId },
          { currentAlbumId: currentAlbumId + 1,
            $push: { albums: 
              {
                "albumId": currentAlbumId + 1,
                "name": name,
                "description": description,
                "photos": [],
                "date": new Date().toISOString()
              }
            }
          }
        );
        console.log(`Document successfully stored in MongoDB ${authId}`);
        res.status(201).json(response);
      } catch (err) {
        const error = {
          status: 500,
          message: `Unable to fulfull POST request: ${err}`
        };
        console.log(err);
        res.status(error.status).json(error);
      }
    })
    .put(async (req, res) => {
      console.log(`Received ${req.method} request at api/albums`)
      if (!req.body) {
        const error = {
          status: 500,
          message: "Nothing found in request body"
        }
        res.status(error.status).json(error);
      }
      // DECONSTRUCT REQ.BODY OBJECT FOR SECURITY PURPOSES
      const { authId, albumId, name, description } = req.body;
      // MODIFY NAME AND DESCRIPTION USING ALBUM ID AND AUTH ID AS IDENTIFIERS
      const params = { authId, albumId, name, description };
      for (const prop in params) if(!params[prop]) delete params[prop];
      try {
        if (name) {
          await userModel.updateOne(
              { 'authId': authId, 'albums.albumId': albumId }, 
              { $set: {
                  'albums.$.name': name
                } 
              }
          );
        }
        if (description) {
          await userModel.updateOne(
              { 'authId': authId, 'albums.albumId': albumId }, 
              { $set: {
                  'albums.$.description': description
                } 
              }
          );
        }
        console.log(`Document successfully updated in MongoDB: ${authId}`);
        res.status(200).json({ name, description });
      } catch (err) {
        const error = {
          status: 500,
          message: `Unable to fulfull PUT request: ${err}`
        };
        console.log(err);
        res.status(error.status).json(error);
      }
    })
    .delete(async (req, res) => {
      console.log(`Received ${req.method} request at api/albums`)
      if (!req.body) {
        const error = {
          status: 500,
          message: "Nothing found in request body"
        }
        res.status(error.status).json(error);
      }
      const { authId, albumId } = req.body;
      try {
      const response = await userModel.updateOne(
        { authId: authId },
        { $pull: { 
            albums: {
              "albumId": albumId
            }
          }
        }
      );
        console.log(`Document successfully deleted from MongoDB: ${authId}`);
        res.status(200).json(response);
      } catch (err) {
        const error = {
          status: 500,
          message: `Unable to fulfull DELETE request: ${err}`
        };
        console.log(err);
        res.status(error.status).json(error);
      }
    });

module.exports = router;
