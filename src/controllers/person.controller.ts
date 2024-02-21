import { Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PersonModel } from "src/models/person.model";
import { Repository } from "typeorm";

@Controller('/person')
export class PersonController{
    constructor(@InjectRepository(PersonModel) private model: Repository<PersonModel>){

    }
    @Post()
    public create(): any {
        return {
            data: 'Create !!!'
        };
    }
    @Get()
    public async getAll(): Promise<{ data: PersonModel[] }> {
        const list = await this.model.find();
        return {
            data: list
        };
    }
    @Get(':id')
    public getOne(): any {
        return {
            data: 'Create !!!'
        };
    }
    @Put(':id')
    public update(): any {
        return {
            data: 'Create !!!'
        };
    }
    @Delete(':id')
    public delete(): any {
        return {
            data: 'Create !!!'
        };
    }
}