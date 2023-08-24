const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models/index.js");
const UserInfo = db.UserInfo;

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).json({
      message: "No token provided!"
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        message: "Unauthorized!"
      });
    }
    req.login = decoded.login; // Using login instead of id
    next();
  });
};

hasRole = (roleName) => {
  return (req, res, next) => {
    let token = req.headers["x-access-token"];
    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          message: "Unauthorized!"
        });
      }
      req.login = decoded.login; // Using login instead of id
    });

    UserInfo.findOne({
      where: { login: req.login }
    }).then(user => {
      if (!user) {
        return res.status(403).json({
          message: "User not found or does not have required role!"
        });
      }
      else {
        if (user.role === roleName) {
          console.log("token通过");
          next();
        } else {
          return res.status(403).json({
            message: `Require ${roleName} Role!`
          });
        }
      }
    });
  };
};

const authJwt = {
  verifyToken: verifyToken,
  hasRole: hasRole,
};

module.exports = authJwt;
