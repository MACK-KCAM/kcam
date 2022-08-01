// ALL API REQUESTS ARE PROCESSED IN IPATH TO DETERMINE TYPE OF REQUEST
function path(url) {
  const allRoutes = {
    "/users": {
      methods: ["GET", "POST", "PUT", "DELETE"]
    },
    "/albums": {
      methods: ["GET", "POST", "PUT", "DELETE"]
    },
    "/photos": {
      methods: ["GET", "POST", "PUT", "DELETE"]
    },
    "/favorites": {
      methods: ["GET", "POST", "PUT", "DELETE"]
    }
  }
  return allRoutes[url];
}

module.exports = path;
