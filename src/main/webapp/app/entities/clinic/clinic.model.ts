import { Recording } from '../recording';
import { Userinfo } from '../userinfo';
export class Clinic {
    constructor(
        public id?: number,
        public name?: string,
        public code?: string,
        public recording?: Recording,
        public userinfo?: Userinfo,
    ) {
    }
}
