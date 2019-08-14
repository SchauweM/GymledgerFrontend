export class NoteDay {
    constructor(
        private _note: string,
        private _date: Date,
        private _injuryId: number
    ){}

    get note() { return this._note}
    get date() { return this._date}

    set note(note: string) { this._note = note}
    set date(date: Date) {this._date = date}

    static fromJson(json: any): NoteDay {
        const npd = new NoteDay(json.note, json.day, json.injuryId);
        return npd;
    }

    toJson(): any {
        return {
            note: this._note,
            date: this._date,
            injuryId: this._injuryId
        }
    }


}