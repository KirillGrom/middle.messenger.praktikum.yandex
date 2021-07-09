import {ProfileFieldType} from '../../types/profileField.type';

export enum typeEdit {
    profile= 'profile',
    password= 'password',

}
export type ProfileType = {
    isEdit: boolean;
    typeEdit: typeEdit;
    inputList: ProfileFieldType[];
}

