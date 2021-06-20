import Block from '../../modules/Block';
import FormMsgTmpl from './formMsg.tmpl';
import {FormMsgType} from './formMsg.type';

export default class FormMsg extends Block {
	constructor(props:FormMsgType) {
		super('form', props);
	}

	render(): HTMLElement {
		return this._compile(FormMsgTmpl)(this.props);
	}
}
