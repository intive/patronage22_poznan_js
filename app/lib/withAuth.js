const { verifyJwtInRequest } = require('./hash');

/**
 * HOF - Adds authorization to api route handler
 * If request is unauthorized, returns 401 Unathorized
 * If request is autorized, adds req.session object with user data
 *
 * @param {function} handler route handler
 */
const withAuth =
  (handler) =>
  (req, res, ...params) => {
    const auth = verifyJwtInRequest(req);
    if (!auth) {
      return res.status(401).send('Not authorized');
    }
    req.session = auth;
    return handler(req, res, params);
  };

export default withAuth;
