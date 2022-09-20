let getResponse = async (req, res) => {
  return res.status(200).json({
    message: "ok. Move on!",
  });
};

module.exports = {
  getResponse,
};
