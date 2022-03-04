const books = require('./books');

const showBooksHandler = (request, h) => {
  const { name, reading, finished } = request.query;
  let bookList = books;
  if (reading) bookList = bookList.filter((item) => item.reading === (parseInt(reading, 10) === 1));
  if (finished) bookList = bookList.filter((item) => item.finished === (parseInt(finished, 10) === 1));
  if (name) bookList = bookList.filter((item) => RegExp(name, 'gi').test(item.name));
  bookList = bookList.map((item) => ({
    id: item.id, name: item.name, publisher: item.publisher || null,
  }));
  const response = h.response({
    status: 'success',
    data: {
      books: bookList,
    },
  });
  response.code(200);
  return response;
};

module.exports = { showBooksHandler };
