const filtered = (books, filter) => {
  if (filter === 'All_Books') {
    return books;
  }
  return books.filter(books => books.category === filter);
};

export default filtered;
