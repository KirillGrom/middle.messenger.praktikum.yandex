import Block from '../../modules/Block';
import inputUploadFileTmpl from './inputUploadFile.tmpl';

export default class InputUploadFile extends Block {
	constructor(props = {}) {
		super(inputUploadFileTmpl, props);
	}
}
