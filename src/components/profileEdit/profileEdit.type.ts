import {ProfileFieldType} from '../../types/profileField.type';

export type ProfileEditType = {
    imgSrc: string;
    name: string;
    inputList: ProfileFieldType[];
    events: Record<string, Function>;
}
