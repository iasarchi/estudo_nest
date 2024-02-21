import { PersonModel } from "src/models/person.model";
import { Repository } from "typeorm";
export declare class PersonController {
    private model;
    constructor(model: Repository<PersonModel>);
    create(): any;
    getAll(): Promise<{
        data: PersonModel[];
    }>;
    getOne(): any;
    update(): any;
    delete(): any;
}
