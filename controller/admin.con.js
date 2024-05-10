const { Admin } = require("../model/db.index");

exports.createadmin = async (req, res, next) => {
  const { userid, username, email } = req.body;

  console.log(req.body);
  const admin = Admin.create({
    userid,
    username,
    email,
  });

  return res.json({
    message: "admin added success",
    admin,
  });
};
