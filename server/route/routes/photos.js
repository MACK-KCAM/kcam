const router = require('../router');
const { userModel: { userModel } } = require('../../models');
// const { imgUpload } = require('../../middlewares/uploads/imgUpload');

router.route('/photos')
  .post(async (req, res) => {
    console.log(`Received ${req.method} request at api/photos`)
    if (!req.body) {
      const error = {
        status: 500,
        message: "Nothing found in request body"
      }
      res.status(error.status).json(error);
    }
    /* 
      ------- Middleware can be invoked here -------
      Pass request body object containing uploaded file
      into middleware controller for file storage and it 
      should return string of URL.

      Example:
      const imgUrl = await imgUpload(req); // return string of URL
    */
    let imgUrl = 'google.com';
    // SAVE STRING URL OF UPLOADED IMAGE IN CORRECT ALBUM
    const { authId, albumId } = req.body;
      try {
        // ADD PHOTO REFERENCE TO CORRECT ALBUM
        await userModel.updateOne(
            { 'authId': authId, 'albums.albumId': albumId }, 
            { $push: {
                'albums.$.photos': imgUrl
              } 
            }
        );
        // ADD PHOTO REFERENCE TO GLOBAL ALBUM
        await userModel.updateOne(
          { 'authId': authId }, 
          { $push: {
              'global': imgUrl
            } 
          }
        );
        console.log(`Document successfully stored in MongoDB ${authId}`);
        res.status(201).json({albumId, imgUrl});
      } catch (err) {
        const error = {
          status: 500,
          message: `Unable to fulfull POST request: ${err}`
        };
        console.log(err);
        res.status(error.status).json(error);
      }
    })
  .delete(async (req, res) => {
    console.log(`Received ${req.method} request at api/photos`)
    if (!req.body) {
      const error = {
        status: 500,
        message: "Nothing found in request body"
      }
      res.status(error.status).json(error);
    }
    // DELETE PHOTO REFERENCE FROM ALBUM AND FAVORITES ARRAY, AS WELL AS FILE IF FILE BOOLEAN IS PASSED
    const { authId, albumId, imgUrl, file } = req.body;
    try {
      // REMOVE FILE REFERENCE REGARDLESS OF PASSED FILE BOOLEAN VARIABLE
      const response = await userModel.updateOne(
        { authId: authId, 'albums.albumId': albumId },
        { $pull: {
            'albums.$.photos': imgUrl
          }
        }
      );
      // DELETE FILE FROM DIRECTORY IF PASSED FILE BOOLEAN IS TRUE, 
      // ELSE LEAVE FILE REFERENCE IN GLOBAL GALLERY AND FILE IN FOLDER
      // INSERT FUNCTION TO DELETE FILE FROM FOLDER!
      if (file) {
        await userModel.updateOne(
          { authId: authId },
          { $pull: { 
              'global': imgUrl
            }
          }
        );
      }
      console.log(`Document successfully deleted from MongoDB: ${authId}`);
      res.status(200).json({response, file});
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
