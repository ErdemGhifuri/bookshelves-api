const {
  addBookHandler, showBooksHandler, showBookDetailHandler, changeBookHandler, deleteBookHandler,
} = require('../handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: showBooksHandler,
  },
  {
    method: 'PUT',
    path: '/books/{id*}',
    handler: changeBookHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{id*}',
    handler: deleteBookHandler,
  },
  {
    method: 'GET',
    path: '/books/{id*}',
    handler: showBookDetailHandler,
  },
  {
    method: '*',
    path: '/{any*}',
    handler: (request, h) => 'Halaman tidak ditemukan',
  },
];

module.exports = routes;
