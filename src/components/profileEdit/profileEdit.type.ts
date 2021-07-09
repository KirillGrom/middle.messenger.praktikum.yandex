import {ProfileFieldType} from '../../types/profileField.type';

export type ProfileEditType = {
    inputList: ProfileFieldType[];
    events: Record<string, Function>;
}
