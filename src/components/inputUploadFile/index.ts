import Block from '../../modules/Block';
import inputUploadFileTmpl from './inputUploadFile.tmpl';
import {InputUploadFileType} from './inputUploadFile.type';

export default class InputUploadFile extends Block {
	constructor(props:InputUploadFileType) {
		super('div', props);
	}

	render():HTMLElement {
		return this._compile(inputUploadFileTmpl)(this.props);
	}
}
