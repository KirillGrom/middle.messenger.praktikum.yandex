// @ts-ignore
import Handlebars from 'handlebars';
import boxModalTmpl from './boxModal.tmpl';
import Block from '../../modules/Block';
import Button from '../button';
import EnterField from '../enterField';
import {BoxModalType} from './boxModal.type';

export default class BoxModal extends Block {
	constructor(props: BoxModalType) {
		const components = {
			button: new Button({
				text: props.textBtn,
			}),
			enterField: new EnterField({...props.fieldParams}),
		};
		super('div', {...props, components});
	}

	render(): Function {
		return Handlebars.compile(boxModalTmpl);
	}
}
