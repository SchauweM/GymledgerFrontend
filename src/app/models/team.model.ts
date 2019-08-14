import { Gymnast } from '../gymast/gymnast.model';

export class Team {
    constructor(
        private _name: string,
        private _country: string,
        private _gymnasts: Array<Gymnast>,
        private _amountOfGymnasts: Number
    ){}

    get name(){return this._name}
    get country(){return this._country}
    get gymnasts() {return this._gymnasts}
    get amountOfGymnasts() {return this._amountOfGymnasts}

    set name(name: string){this._name = name}
    set country(country: string){ this._country = country}
    set gymnasts(gymnasts: Array<Gymnast>) { this._gymnasts = gymnasts}
    set amountOfGymnasts(amount: Number) { this._amountOfGymnasts = amount}

    addGymnastToTeam(gymnast: Gymnast) {
        this._gymnasts.push(gymnast);
    }

    static fromJSON(json: any): Team {
        const t = new Team(json.name, json.country, json.gymnasts, json.amount);
        return t;
    }

    

    
}