let getResponse = async (req, res) => {
  return res.status(200).json({
    message: "ok. YOUR IP IN WHITELIST!",
  });
};

module.exports = {
  getResponse,
};
