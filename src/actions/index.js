const createBook = book => ({
  type: 'CREATE_BOOK',
  payload: book,
});

const filterCategory = filter => ({
  type: 'FILTER_CATEGORY',
  payload: filter,
});

const removeBook = book => ({
  type: 'REMOVE_BOOK',
  payload: book.id,
});

const filterBook = filter => ({
  type: 'FILTER_BOOK',
  filter,
});

export {
  createBook, removeBook, filterBook, filterCategory,
};

// GET & POST /api/v1/books
// DELETE /api/v1/books/:id
