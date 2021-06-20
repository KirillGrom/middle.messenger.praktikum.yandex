import {FieldType} from '../../types/field.type';

export type RegisterFormType = {
    enterFields:FieldType[];
    class: string[];
    events:Record<string, Function>
}
