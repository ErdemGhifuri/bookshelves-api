const { addBookHandler } = require('./addBooksHandler');
const { showBooksHandler } = require('./showAllBooksHandler');
const { showBookDetailHandler } = require('./showBookDetailHandler');
const { changeBookHandler } = require('./changeBooksHandler');
const { deleteBookHandler } = require('./deleteBookHandler');

module.exports = {
  addBookHandler, showBooksHandler, showBookDetailHandler, changeBookHandler, deleteBookHandler,
};
