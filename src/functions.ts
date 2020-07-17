import {IBook, ILibMgrCallback} from "./interfaces";
import {TBookProperties} from "./types";
import {Category} from "./enums";

export function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

export function getAllBooks(): ReadonlyArray<IBook> {
    const books: readonly IBook[] = <const>[
        { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript },
        { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript }
    ];

    return books;
}

export function logFirstAvailable(books: readonly {id: number;
    title: string;
    author: string;
    available: boolean,
    category: Category}[] = getAllBooks()): void {
    const firstBook = books.find(book => book.available);

    console.log(`First Book title: "${firstBook.title}", Books in total ${books.length}`);
}

export function getBookTitlesByCategory(category: Category = Category.JavaScript): string[] {
    const books = getAllBooks();
    return books.filter(book => book.category === category).map(book => book.title)

}

export function logBookTitles(titles: string[]): void {
    titles.forEach(title => console.log('> Title', title))
}

export function getBookAuthorByIndex(index: number): [string, string] {
    const book = getAllBooks().find(book => book.id === index);
    return [book.title, book.author]
}

export function calcTotalPages(): bigint {
    const lib = [
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
    ];

    let res = lib.reduce((prev, cur) => {
        return prev + cur.books * cur.avgPagesPerBook
    }, 0)

    return BigInt(res);
}

export function createCustomerID(name: string, id: number): string {
    return `${id}-${name}`;
}

export function createCustomer(name: string, age?: number, city?: string): void {
    for(let i = 0; i < arguments.length; i++) {
        console.log(`> ${arguments[i]}`);
    }
}

export function getBookByID(id: number): IBook | undefined {
    return getAllBooks().find(book => book.id === id)
}

export function сheckoutBooks(customer: string, ...booksIDs: number[]): string[] {
    console.log('Customer', customer)
    return  booksIDs.map(id => getBookByID(id)).filter(book => !!book.available).map(book => book.title);
}

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];

export function getTitles(...args: [string | boolean | number, boolean?]): string[] {
    const books = getAllBooks();

    if (args.length === 1) {
        const [arg] = args;

        if (typeof arg === 'string') {
            return books.filter(book => book.author === arg).map(book => book.title);
        } else if (typeof arg === 'boolean') {
            return books.filter(book => book.available).map(book => book.title);
        }

    } else if (args.length === 2) {
        const [id, available] = args;

        if (typeof id === 'number' && typeof available === 'boolean') {
            return books.filter(book => book.id === id && book.available === available).map(book => book.title)
        }
    }

    return [];
}

export function assertStringValue(val: any): asserts val is string {
    if (typeof val !== 'string') {
        throw new Error('value should have been a string');
    }
}

export function bookTitleTransform(title: any) {
    assertStringValue(title);
    return [...title].reverse().join('');
}

export function printBook(book: IBook): void {
    console.log(`${book.title} by ${book.author}`);
}

export function getBookProperties(book: IBook, prop: TBookProperties): any {
    if (typeof book[prop] === 'function') {
        return book[prop][name]
    } else {
        return book[prop]
    }
}

export function purge<T>(inventory: Array<T>): Array<T> {
    return inventory.slice(2);
}

export function getBooksByCategory(category: Category, callback: ILibMgrCallback) {
    setTimeout(() => {
        try {
            const titles = getBookTitlesByCategory(category);
            if (titles.length) {
                callback(null, titles)
            } else {
                throw new Error('No Books Found');
            }
        }
        catch (e) {
            callback(e, null);
        }
    }, 2000)
}

export function logCategorySearch(error: Error, titles: string[]): void {
    if (error) {
        console.log(`Error message ${error.message}`)
    } else {
        console.log(titles);
    }
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const titles = getBookTitlesByCategory(category);
            if (titles.length) {
                resolve(titles)
            } else {
                reject('No Books Found');
            }
        }, 2000)
    });
}

export async function logSearchResults(category: Category) {
    const titles: string[] = await getBooksByCategoryPromise(category);
    console.log(titles);
}
