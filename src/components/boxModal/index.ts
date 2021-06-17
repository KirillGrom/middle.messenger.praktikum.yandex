
import boxModalTmpl from './boxModal.tmpl';
import Block from '../../modules/Block';
import Button from '../button';
import EnterField from '../enterField';
import {BoxModalType} from './boxModal.type';
import parseTmpl from '../../utils/parseTmpl';

export default class BoxModal extends Block {
	props:BoxModalType
	constructor(props:BoxModalType) {
		super(boxModalTmpl, props);
	}

	render(): string {
		this.components = {
			button: new Button({
				text: this.props.textBtn,
				class: '',
			}),
			enterField: new EnterField({...this.props.fieldParams}),
		};
		this.source = parseTmpl.call(this);
		const ctx = this._compile();
		return ctx(this.props);
	}
}
