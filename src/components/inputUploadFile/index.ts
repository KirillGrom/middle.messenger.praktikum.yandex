// @ts-ignore
import Handlebars from 'handlebars';
import Block from '../../modules/Block';
import inputUploadFileTmpl from './inputUploadFile.tmpl';
import {InputUploadFileType} from './inputUploadFile.type';

export default class InputUploadFile extends Block {
	constructor(props: InputUploadFileType) {
		super('div', props);
	}

	render(): Function {
		return Handlebars.compile(inputUploadFileTmpl);
	}
}
