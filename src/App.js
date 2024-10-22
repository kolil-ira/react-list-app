
import React from 'react';
import BookList from './components/BookList';

function App() {
  const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 2, title: '1984', author: 'George Orwell' },
    { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { id: 4, title: 'MobDick', author: 'Herman Melville' }
  ];

  return (
    <div className="App">
      <h1>Book List</h1>
      <BookList books={books} />
    </div>
  );
}

export default App;
