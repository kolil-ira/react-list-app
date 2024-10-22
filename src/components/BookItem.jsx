
import React from 'react';

const BookItem = ({ book }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
    </div>
  );
};

export default BookItem;
