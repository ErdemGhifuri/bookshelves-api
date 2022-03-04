const books = require('./books');

const changeBookHandler = (request, h) => {
  const {
    name, readPage, pageCount, ...rest
  } = request.payload;

  const bookId = request.params.id;
  const bookIndex = books.findIndex(({ id }) => id === bookId);
  if (bookIndex === -1) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Id tidak ditemukan',
    });
    response.code(404);
    return response;
  }

  // validation
  if (!name) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Mohon isi nama buku',
    });
    response.code(400);
    return response;
  }
  if (pageCount < readPage) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
    });
    response.code(400);
    return response;
  }

  // change detail
  const date = new Date();
  books[bookIndex] = {
    ...books[bookIndex],
    name,
    readPage,
    pageCount,
    finished: pageCount === readPage,
    updatedAt: date.toLocaleString(),
    ...rest,
  };

  const response = h.response({
    status: 'success',
    message: 'Buku berhasil diperbarui',
  });
  response.code(200);
  return response;
};

module.exports = { changeBookHandler };
