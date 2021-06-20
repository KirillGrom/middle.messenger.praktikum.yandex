import {ProfileFieldType} from '../../types/profileField.type';

export type ProfileBlockType = {
    imgSrc:string;
    name:string;
    inputList: ProfileFieldType[];
    class:string[];
}
