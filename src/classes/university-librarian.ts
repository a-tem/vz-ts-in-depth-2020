import * as Interfaces from "./../interfaces";
import {format, logger, logMethod, logParameter, sealed, writable} from "../decorators";

// @sealed('UniversityLibrarian')
// @logger
export class UniversityLibrarian implements Interfaces.ILibrarian {
    @format() name: string;
    email: string;
    department: string;

    @logMethod
    assistCustomer(@logParameter castName: string): void {
        console.log(`${this.name} is assisting ${castName}`);
    }

    // @writable(true)
    assistFaculty(): void {
        console.log('Assisting faculty');
    }

    // @writable(false)
    teachCommunity() {
        console.log('Teaching community');
    }

}
