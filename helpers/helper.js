const path = require('path');

const createPath = (page) => path.resolve(__dirname, '../ejs-views', `${page}.ejs`);

const handleError = (res, error) =>{
  res.status(404);
  res.render(createPath('error'), {title: "Error"});
  console.log(error);
};

module.exports = {
  createPath,
  handleError
};