const app = require('./');
const { waterBlocksHandler } = require('./handlers');


app.post('/api/waterblocks', waterBlocksHandler);
