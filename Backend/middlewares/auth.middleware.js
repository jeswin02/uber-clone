const userModal = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const BlacklistToken = require("../models/blacklistToken.model");

module.exports.authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const isBlacklisted = await BlacklistToken.findOne({ token: token });

  if (isBlacklisted) {
    res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModal.findById(decoded._id);

    req.user = user;
    return next();
  } catch (err) {
    res.status(401).json({ message: "Unauthorized" });
  }
};
