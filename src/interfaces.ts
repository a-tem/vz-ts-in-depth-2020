import {Category} from "./enums";

interface IBook {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    markDamaged?: DamageLogger;
    pages?: number;
}

interface DamageLogger {
    (reason: string): void
}

interface IPerson {
    name: string;
    email: string;
}

interface IAuthor extends IPerson{
    numBooksPublished: number;
}

interface ILibrarian extends IPerson {
    department: string;
    assistCustomer: (custName: string) => void
}


interface IMagazine {
    title: string;
    publisher: string;
}

interface IShelfItem {
    title: string;
}

interface ILibMgrCallback {
    (err: Error, titles: string[]): void
}

export {IBook, DamageLogger as ILogger, IPerson, IAuthor, ILibrarian, IMagazine, IShelfItem, ILibMgrCallback}
