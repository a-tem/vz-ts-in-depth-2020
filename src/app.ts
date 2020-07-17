import {logSearchResults} from './functions';
import {Category} from "./enums";
import {UniversityLibrarian} from "./classes/index";

/*
showHello('greeting', 'TypeScript');
*/

/*
logFirstAvailable(getAllBooks());
logBookTitles(getBookTitlesByCategory(Category.JavaScript));

console.log('getBookAuthorByIndex 1', getBookAuthorByIndex(1));
console.log('calcTotalPages', calcTotalPages())
*/

/*
const myId = createCustomerID('Ann', 10);
console.log(myId);

let idGenerator: (name: string, id: number) => string;
idGenerator = (name, id) => `${id}-${name}`;

createCustomer('Name 1');
createCustomer('Name 2', 23);
createCustomer('Name 3', 52, 'Kiev');

logBookTitles(getBookTitlesByCategory());

logFirstAvailable();
console.log(getBookByID(1));

const myBooks: string[] = сheckoutBooks('Ann', 1,2,4);
console.log(myBooks);

const checkedOutBooks = getTitles(false);
console.log(checkedOutBooks);
*/
// Task 03.04. Assertion Functions
/*
console.log(bookTitleTransform('32'));
*/

// Task 04.01. Defining an Interface
/*
const myBook: IBook = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    // year: 2015,
    // copies: 3
    pages: 200,
    markDamaged: (reason) => console.log(`Damaged: ${reason}`),
}

printBook(myBook)
*/
//Task 04.02. Defining an Interface for Function Types

/*
const logDamage: ILogger = (p) => {
    console.log(`Damaged: ${p}`)
}
logDamage('missing book cover');
*/
// Task 04.03. Extending Interface

/*
const favoriteAuthor: IAuthor = {
    name: 'Author',
    email: 'author@mail.com',
    numBooksPublished: 3,
}

const favoriteLibrarian: ILibrarian = {
    name: 'Librarian',
    email: 'librarian@mail.com',
    department: 'Library',
    assistCustomer: custName => console.log('> ', custName)
}
*/

// Task 04.04. Optional Chaining
/*
const offer: any = {
    book: {
        title: 'Essential TypeScript'
    }
}

console.log(offer?.magazine?.title);
console.log(offer?.book?.title);
console.log(offer?.magazine?.getTitle?.()); // for potentially
*/
// Task 04.05. Keyof Operator

/*
console.log(getBookProperties(getAllBooks()[0], 'title'))
console.log(getBookProperties(myBook, 'markDamaged'))
// console.log(getBookProperties(getAllBooks()[0], 'isbn'))
*/
// Task 05.01. Creating and Using Classes

/*
const ref = new ReferenceItem('Test', 2020);
ref.printItem();

ref.publisher = 'New Publisher';
console.log(ref.publisher);
*/

// Task 05.02. Extending Classes

/*
const refBook: RefBook = new RefBook('Wiki', 2020, 'Public');
refBook.printItem();
refBook.printCitation();
*/

// Task 05.04. Interfaces for Class Types

/*
const favoriteLibrarian: ILibrarian = new UniversityLibrarian();
favoriteLibrarian.name = 'Test';
favoriteLibrarian.assistCustomer('Customer');
*/
// Task 05.05. Intersection and Union Types

/*
const personBook: TPersonBook = {
    id: 1,
    name: 'Person Name',
    email: 'person@mail.com',
    title: 'Book Title',
    author: 'Author',
    available: true,
    category: Category.Angular,
}
*/
// Task 06.05. Dynamic Import Expression

/*
const flag = true;
if (flag) {
    import('./classes/index')
        .then(module => {
            const reader = new module.Reader();
            reader.name = 'Reader'
            console.log(reader)
        })
        .catch(error => console.warn(error))
}
*/

// Task 07.01. Generic Functions
/*
const inventory: IBook[] = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];
console.log(purge(inventory));
console.log(purge([1,2,3,4,5,6]));
*/

// Task 07.02. Generic Interfaces and Classes

/*
const bookShelf = new Shelf<IBook>();
inventory.map(item => bookShelf.add(item));
console.log(bookShelf.getFirst().title);
*/

/*
const magazines = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' }
];

const magazineShelf = new Shelf<IMagazine>();
magazines.map(item => magazineShelf.add(item));
console.log(magazineShelf.getFirst().title);
*/
// Task 07.03. Generic Constraints
/*
magazineShelf.printTitles();
console.log(magazineShelf.find('Five Points'));
*/
// Task 07.04. Utility Types
/*
const a: TBookRequiredFields = {
    id: 1,
    category: Category.Angular,
    available: true,
    author: 'Author',
    title: 'Required Book',
    markDamaged: null,
    pages: 325,
};

const b: TUpdatedBook = {};

const params: Parameters<TСreateCustomerFunctionType> = ['Customer'];
createCustomer(...params);
*/

// Task 08.01. Class Decorators (sealed)
/*
const ul = new UniversityLibrarian();
console.log(ul);
*/

// Task 08.02. Class Decorators that replace constructor functions (logger)
/*
const ul = new UniversityLibrarian();
ul.name = 'Test';
ul['printLibrarian']();
*/

// Task 08.03. Method Decorator (writable)
/*
ul.assistFaculty = null;
ul.teachCommunity = null;
*/

// Task 08.04. Method Decorator (timeout)
/*
const ri = new RefBook('Enc', 2010, 'Extended');
ri.printItem();
*/

// Task 08.05. Parameter Decorator (logParameter)
/*
ul.name = 'Test';
ul.assistCustomer('User');
console.log(ul);
*/

// Task 08.06. Property Decorator
/*
ul.name = 'Librarian';
ul.assistCustomer('Assistant');
*/

// Task 08.07. Accessor Decorator
/*
const enc = new RefBook('Enc', 1990, 'Third');
enc.copies = 1.9;
*/

// Task 09.01. Callback Functions
/*
console.log('Start');
getBooksByCategory(Category.JavaScript, logCategorySearch);
getBooksByCategory(Category.Software, logCategorySearch);
console.log('Finish');
*/

// Task 09.02. Promises
/*
console.log('Start');

getBooksByCategoryPromise(Category.JavaScript)
    .then(titles => {
        console.log(titles)
        return titles.length;
    })
    .then(numberOfBooks => console.log(numberOfBooks))
    .catch(reason => console.warn(reason))
    .finally(() => console.log('End of Promise'));
getBooksByCategoryPromise(Category.Software)
    .then(titles => console.log(titles))
    .catch(reason => console.warn(reason))
    .finally(() => console.log('End of Promise'));

console.log('Finish');
*/

// Task 09.03. Async Functions
/*
console.log('Start');
logSearchResults(Category.JavaScript)
console.log('Finish');
*/
