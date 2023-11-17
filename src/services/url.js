const databaseConnection = require("../utils/database");
const Url = require("../models/url");

const listUrls = async () => {
  await databaseConnection();

  const urls = await Url.find();

  return urls;
};

const createUrl = async (url) => {
  await databaseConnection();

  const count = await Url.countDocuments();

  const newUrl = Url.create({
    ...url,
    shortUrl: count,
  });

  return newUrl;
};

// const deleteUrl = async (userId) => {
//   await databaseConnection();

//   return await User.findByIdAndDelete(userId);
// };

// const updateUrl = async (userId, userUpdated) => {
//   await databaseConnection();

//   return await User.findByIdAndUpdate(userId, userUpdated);
// };

module.exports = {
  listUrls,
  createUrl,
};
