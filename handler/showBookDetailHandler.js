const books = require('./books');

const showBookDetailHandler = (request, h) => {
  const bookId = request.params.id;
  const bookDetail = books.find(({ id }) => id === bookId);
  if (bookDetail) {
    const response = h.response({
      status: 'success',
      data: {
        book: bookDetail,
      },
    });
    response.code(200);
    return response;
  }
  const response = h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  });
  response.code(404);
  return response;
};

module.exports = { showBookDetailHandler };
