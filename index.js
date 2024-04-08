const url = 'https://anapioficeandfire.com/api/books';

async function fetchBooks() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const books = await response.json();
    renderBooks(books);
  } catch (error) {
    console.error('There was a problem fetching the books:', error.message);
  }
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.textContent = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', fetchBooks);
