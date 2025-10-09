const allUsersModel = require('../../models/AllUsers/allUsersModel');

const addUserControler = async (req, res) => {
  console.log('came in');
  const allUsers = req.body.users.users;
  //   console.log(allUsers);
  const respone = await allUsersModel.insertMany(allUsers);
  console.log(repsonse);
  if (!respone) {
    res.status(400).json({
      message: 'Error in adding users',
    });
  }
  res.json({
    users,
  });
};

module.exports = { addUserControler };
