const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const user = require("../models/user");
require('dotenv').config()

exports.authenticate = async (req, res, next) => {
  try {
    let token;
    const authHeader = req.headers["authorization"];
    if (authHeader &&
      authHeader.split(' ')[0] === 'Bearer'
    ) {
      token = authHeader.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({ success: false, message: "No token recieved." })
    }

    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET_KEY)


    const checkUser = await user.findById(decoded.id);
    if (!checkUser) {
      return res
        .status(401)
        .json({ message: "JWT token not valid." })
    }
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      const authHeader = req.headers["authorization"];
      const token = authHeader.split(' ')[1];
      const expiredToken = promisify(jwt.verify)(token, process.env.JWT_SECRET_KEY, { ignoreExpiration: true });
      const checkUser = await user.findById(decoded.id);
      if (!checkUser) {
        return res
          .status(401)
          .json({ message: "JWT token not valid." })
      }
      const refreshedToken = jwt.sign({ id: expiredToken.id }, process.env.JWT_SECRET_KEY, {
        expiresIn: '10m'
      })
      return res
        .status(200)
        .json({ message: "Your previous JWT token expired. Here is the refreshed token:", token: refreshedToken });

    }

    return res
      .status(401)
      .json({ success: false, message: "Authentication Failed" });
  }

  next();

}