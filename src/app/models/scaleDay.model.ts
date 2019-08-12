export class ScaleDay{
    constructor(
        private _scale: number,
        private _date: string,
        private _injuryId: number
    ){}

    static fromJson(json: any): ScaleDay {
        const spd = new ScaleDay(json.scale, json.day, json.injuryId);
        return spd;
    }

    toJson(): any {
        return {
            note: this._scale,
            date: this._date,
            injuryId: this._injuryId
        }
    }
}