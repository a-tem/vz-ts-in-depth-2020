import {IAuthor, IBook, IPerson} from "./interfaces";

export type TBookProperties = keyof IBook;

export type TPersonBook = IPerson & IBook;

export type TBookOrUndefined = IBook | undefined;

export type TBookRequiredFields = Required<IBook>;

export type TUpdatedBook = Partial<IBook>;

export type TAuthorWoEmail = Omit<IAuthor, 'email'>;

export type TСreateCustomerFunctionType = (name: string, age?: number, city?: string) => void;

