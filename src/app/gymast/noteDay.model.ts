export class NoteDay {
    private _id: number;
    private _injuryId: number;
    constructor(
        private _note: string,
        private _date: Date,
    ){}

    get note() { return this._note}
    get date() { return this._date}

    set note(note: string) { this._note = note}
    set date(date: Date) {this._date = date}

    static fromJson(json: any): NoteDay {
        const npd = new NoteDay( json.note, json.day);
        npd._id = json.id;
        npd._injuryId = json.injuryId;
        return npd;
    }

    toJson(): any {
        return {
            id: this._id,
            note: this._note,
            day: this._date,
            injuryId: this._injuryId
        }
    }


}