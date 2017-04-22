const api = require('./api');

const go = async (page) => {

  const html = await api.search();
  console.log(html)
}


go();
