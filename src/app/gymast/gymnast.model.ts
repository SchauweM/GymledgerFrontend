import { Injury } from './injury.model';

export class Gymnast {
    private _id: number;

    constructor(
        private _firstName: string,
        private _lastName: string,
        private _birthDate: Date,
        private _email: string,
        private _injuries: Array<Injury>
    ){}

    get id() { return this._id }
    get firstName() { return this._firstName }
    get lastName() {return this._lastName }
    get birthDate() { return this._birthDate }
    get email() { return this._email }
    get injuries() { return this._injuries }

    set id(id: number) { this._id = id; }
    set firstName(firstName: string) { this._firstName = firstName; }
    set lastName(lastName: string){this._lastName = lastName; }
    set birthDate(birthDate: Date){this._birthDate = birthDate;}
    set email(email: string) {this._email = email; }
    set injuries(injuries: Array<Injury>) { this._injuries = injuries }
    
    
    addInjury(newInjury: Injury) {
        this._injuries.push(newInjury);
      }
    
    static fromJSON(json: any): Gymnast {
        const g = new Gymnast(json.firstname, json.lastname,json.birthDate, 
            json.email, json.injuries.map(Injury.fromJson));
        g._id = json.id;
        return g;
    }

     toJson(): any {
        return {
            id: this._id,
            firstName: this._firstName,
            lastName: this._lastName,
            birthDate: this._birthDate,
            email: this._email,
            injuries: this.injuries.map(inj => inj.toJson())
        }
    }
}