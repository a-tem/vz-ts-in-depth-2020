import {ReferenceItem} from "./reference-item";
import {positiveInteger} from "../decorators";

export default class Encyclopedia extends ReferenceItem {
    private _copies: number;

    get copies() {
        return this._copies;
    }

    // @positiveInteger
    set copies(val: number) {
        this._copies = val;
    }

    constructor(title: string, year: number, public edition: string) {
        super(title, year);
    }

    printItem() {
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year})`);
    }

    printCitation() {
        console.log(`${this.title} - ${this.year}`);
    }

}
