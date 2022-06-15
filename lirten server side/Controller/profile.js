const Profile = require("../Model/profile");

const create = (profile) => {
  const arrayOfNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const uniqueId = Math.ceil(
    Math.random() * arrayOfNumbers.length * 10000
  ).toString();
  profile.id = uniqueId;
  return Profile.create(profile);
};

const find = () => {
  return Profile.find();
};

module.exports = { create, find };
