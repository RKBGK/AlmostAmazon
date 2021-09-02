import { getSingleAuthor, getAuthorbooks } from './authorData';
import { getSingleBook, deleteBook } from './bookData';

const viewBookDetails = (bookFirebasekey) => new Promise((resolve, reject) => {
  getSingleBook(bookFirebasekey)
    .then((bookObject) => {
      getSingleAuthor(bookObject.author_id)
        .then((authorObject) => {
          resolve({ authorObject, ...bookObject });
        });
    }).catch(reject);
});

const viewAuthorDetails = () => {
  console.warn('placeholder');
};

const deleteAuthorBooks = (authorId) => new Promise((resolve, reject) => {
  getAuthorbooks(authorId).then((authorsBookArray) => {
    const deleteBooks = authorsBookArray.map((book) => deleteBook(book.firebasekey));
  Promise.all(deleteBooks).then(() => resolve(deleteSingleAuthor(authorId)));
    }).catch(reject);  
});    

export { viewBookDetails, deleteAuthorBooks, viewAuthorDetails }

