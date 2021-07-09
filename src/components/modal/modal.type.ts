import {FieldType} from '../../types/field.type';

export type ModalType = {
	title: string;
	btnText: string;
	typeInput: FieldType;
	events: Record<string, Function>;
}
