const getBlocks = payload => {
  const url = 'http://localhost:1234/api/waterBlocks';
  const data = {
    method: 'POST',
    body: JSON.stringify({ payload }),
    headers: new Headers({
      'Content-Type': 'application/JSON'
    })
  };

  return fetch(url, data)
    .then(res => res.json())
    .then(res => (console.log('res>>>', res), res))
};

module.exports = {
  getBlocks
}
