const crypto = require("crypto");

const generateHash = (algorithm, data) => {
  try {
    const hash = crypto.createHash(algorithm);

    hash.update(data);

    const dataHash = hash.digest("hex");
    console.log(dataHash, typeof dataHash);
    return {
      status: true,
      message: dataHash
    };
  } catch (error) {
    console.error(error);
    return {
      status: false,
      message: "Something went wrong!"
    };
  }
};
// generateHash("sha256", "shubham");
module.exports = generateHash;
