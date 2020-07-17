import {timeout} from "../decorators";

export abstract class ReferenceItem {
    /*title: string;
    year: number;

    constructor(newTitle: string, newYear: number) {
        console.log('Creating a new ReferenceItem...');
        this.title = newTitle;
        this.year = newYear;
    }*/

    private _publisher: string;

    static department: string = 'Static Department';

    get publisher() {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    constructor(public title: string, protected year: number) {
    }

    @timeout(2000)
    printItem() {
        console.log(`"${this.title}" was published in ${this.year}`);
        console.log('> St Field: ', ReferenceItem.department);
    }

    abstract printCitation(): void;
}
