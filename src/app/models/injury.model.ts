import { NoteDay } from "./noteDay.model";
import { ScaleDay } from "./scaleDay.model";

export class Injury{
    private _id: Number;
    constructor(
        private _bodyPart: string,
        private _currentScaleOfPain: Number,
        private _description: string,
        private _startDate: Date,
        private _endDate: Date,
        private _note: string,
        private _notePerDay: Array<NoteDay>,
        private _scalePerDay: Array<ScaleDay>,
        private _numberOfDays: Number
    ){}

    get id() { return this._id }
    get bodyPart() { return this._bodyPart }
    get currentScaleOfPain() {return this._currentScaleOfPain}
    get description() {return this._description }
    get startDate() { return this._startDate }
    get endDate() { return this._endDate }
    get note() { return this._note }
    get notePerDay() { return this._notePerDay }
    get scalePerDay() { return this._scalePerDay }
    get numerOfDays() { return this._numberOfDays }

    set id(id: Number) { this._id = id }
    set bodyPart(bodyPart: string) { this._bodyPart = bodyPart }
    set currentScaleOfPain(scale: Number) {this._currentScaleOfPain = scale}
    set description(description: string) { this._description = description }
    set startDate(startDate: Date) {  this._startDate = startDate}
    set endDate(endDate: Date) {  this._endDate = endDate}
    set note(note: string) {  this._note = note}
    set numerOfDays(numberOfDays: Number) {  this._numberOfDays = numberOfDays }
    

    static fromJson(json: any): Injury {
        const i = new Injury(json.bodyPart, json.currentScaleOfPain, json.description, 
            json.startDate, json.endDate, json.note, json.notePerDay.map(NoteDay.fromJson), 
            json.scalePerDay.map(ScaleDay.fromJson), json.aantalDagen);
        return i;
    }

    toJson(): any {
        return {
            bodyPart: this._bodyPart,
            currentScaleOfPain: this._currentScaleOfPain,
            description: this._description,
            startDate: this._startDate,
            endDate: this._endDate,
            note: this._note,
            notePerDay: this._notePerDay.map(npd => npd.toJson()),
            scalePerDay: this._scalePerDay.map(spd => spd.toJson()),
            aantalDagen: this._numberOfDays
        }
    }
}