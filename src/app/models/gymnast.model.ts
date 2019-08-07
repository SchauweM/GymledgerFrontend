import { Injury } from './injury.model';

export class Gymnast {
    private _id: Number;

    constructor(
        private _firstName: string,
        private _lastName: string,
        private _birthDate: Date,
        private _email: string,
        private _injuries: Array<string> //nog veranderen naar Injury
    ){}

    get id() { return this._id }
    get firstName() { return this._firstName }
    get lastName() {return this._lastName }
    get birthDate() { return this._birthDate }
    get email() { return this._email }
    get injuries() { return this._injuries }

    set id(id: Number) { this._id = id; }
    set firstName(firstName: string) { this._firstName = firstName; }
    set lastName(lastName: string){this._lastName = lastName; }
    set birthDate(birthDate: Date){this._birthDate = birthDate;}
    set email(email: string) {this._email = email; }
    set injuries(injuries: Array<string>) { this._injuries = injuries }
    
    
    addInjury(name: string, amount?: number, unit?: string) {
        this._injuries.push(`${amount || 1} ${unit || ''} ${name}`);
      }
    
    static fromJSON(json: any): Gymnast {
        const g = new Gymnast(json.firstName, json.lastName,json.birthDate, json.email, json.injuries);
        return g;
    }
}