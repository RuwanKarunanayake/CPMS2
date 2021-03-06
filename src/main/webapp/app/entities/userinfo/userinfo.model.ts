
const enum GenderEnum {
    'MALE',
    'FEMALE'

};
import { User } from '../../shared';
import { Clinic } from '../clinic';
export class Userinfo {
    constructor(
        public id?: number,
        public regNo?: string,
        public dob?: any,
        public address?: string,
        public gender?: GenderEnum,
        public telephone?: string,
        public mobile?: string,
        public user?: User,
        public clinic?: Clinic,
    ) {
    }
}
