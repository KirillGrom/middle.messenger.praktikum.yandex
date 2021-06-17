import {FieldType} from '../../types/field.type';

export type BoxModalType = {
	id:string
	title:string;
	textBtn:string;
	errorTitle?: string;
	errorActions?:string;
	class?: string;
	fieldParams:FieldType;
}
