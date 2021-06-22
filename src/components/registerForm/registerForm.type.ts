import {FieldType} from '../../types/field.type';

export type RegisterFormType = {
    enterFields: FieldType[];
    events: Record<string, Function>
}
