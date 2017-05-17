
const enum Status {
    'HIGH',
    'MEDIUM',
    'LOW'

};
export class Drug {
    constructor(
        public id?: number,
        public name?: string,
        public available?: boolean,
        public amountStatus?: Status,
    ) {
        this.available = false;
    }
}
