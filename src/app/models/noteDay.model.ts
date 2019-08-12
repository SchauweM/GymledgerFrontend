export class NoteDay {
    constructor(
        private _note: string,
        private _date: string,
        private _injuryId: number
    ){}

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