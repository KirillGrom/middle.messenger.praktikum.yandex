import {FieldType} from '../../types/field.type';

export type authFormType = {
    enterFields: FieldType[]
    class:string[]
    events:Record<string, Function>
}
