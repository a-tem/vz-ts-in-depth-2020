import {IBook} from "../interfaces";

export const Reader = class {
    name: string;
    books: IBook[] = [];

    take(book: IBook): void {
        this.books.push(book)
    }
}
