import {ProfileFieldType} from '../../types/profileField.type';

export type ProfileType = {
    imgSrc: string;
    href: string;
    isEdit: boolean;
    name?: string;
    inputList: ProfileFieldType[];
}

