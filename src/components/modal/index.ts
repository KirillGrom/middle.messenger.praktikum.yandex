// @ts-ignore
import Handlebars from 'handlebars';
import Block from '../../modules/Block';
import EnterField from '../enterField';
import {ModalType} from './modal.type';
import modalTmpl from './modal.tmpl';
import Button from '../button';

export default class Modal extends Block {
	constructor(props: ModalType) {
		const components = {
			enterField: new EnterField(props.typeInput),
			button: new Button({
				text: props.btnText,
			}),
		};
		super('form', {...props, components});
	}

	render(): Function {
		return Handlebars.compile(modalTmpl);
	}
}
