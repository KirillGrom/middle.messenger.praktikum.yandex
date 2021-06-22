import {FieldType} from '../../types/field.type';

export type authFormType = {
    enterFields: FieldType[];
    events: Record<string, Function>;
}
