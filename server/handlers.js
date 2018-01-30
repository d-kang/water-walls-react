const { completeMatrix } = require('./utils/completeMatrix');

const waterBlocksHandler = (req, res) => {
  const { payload } = req.body;
  const blocks = completeMatrix(payload.split(','));
  res.send({ blocks });
};

module.exports = {
  waterBlocksHandler
}
