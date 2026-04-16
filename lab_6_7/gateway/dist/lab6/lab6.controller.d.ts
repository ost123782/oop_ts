import { ClientProxy } from '@nestjs/microservices';
import { ChangeBooksDto, CreateLibraryCardDto, PersonDto, SpecialLibraryCardDto } from './lab6.dto';
export declare class Lab6Controller {
    private readonly client;
    constructor(client: ClientProxy);
    personDemo(dto: PersonDto): Promise<any>;
    phoneDemo(): Promise<any>;
    carDemo(): Promise<any>;
    createLibraryCard(dto: CreateLibraryCardDto): Promise<any>;
    changeBooks(dto: ChangeBooksDto): Promise<any>;
    specialLibraryCard(dto: SpecialLibraryCardDto): Promise<any>;
}
