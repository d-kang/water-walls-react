const { completeMatrix } = require('./utils/completeMatrix');

const waterBlocksHandler = (req, res) => {
  const { body } = req;

  const blocks = completeMatrix(body);
  res.send({ blocks });
};

module.exports = {
  waterBlocksHandler
}
