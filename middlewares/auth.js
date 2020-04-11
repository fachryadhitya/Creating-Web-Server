const jwt = require("jsonwebtoken");
const model = require("../models");

module.exports = (res, req, next) => {
  let token = req.headers.token;
  if (token) {
    let verify = jwt.verify(token, "Fachry");

    model.User.findOne({
      where: {
        id: verify.id
      }
    })
      .then(function(result) {
        if (result) {
          req.decoded = verify;
          next();
        } else {
          res.status(401).json({
            message: "you dont have access"
          });
        }
      })
      .catch(function(error) {
        res.json({ error: error });
      });
  } else {
    res.status(401).json({
      message: "Silahkan login dahulu"
    });
  }
};
