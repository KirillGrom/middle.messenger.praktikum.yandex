import boxModalTmpl from './boxModal.tmpl';
import Block from '../../modules/Block';
import Button from '../button';
import EnterField from '../enterField';
import {BoxModalType} from './boxModal.type';

export default class BoxModal extends Block {
	constructor(props:BoxModalType) {
		const components = {
			button: new Button({
				text: props.textBtn,
				class: ['button-wrapper'],
			}),
			enterField: new EnterField({...props.fieldParams}),
		};
		super('div', {...props, components});
	}

	render(): HTMLElement {
		return this._compile(boxModalTmpl)({
			...this.props,
			components: {
				button: this.props.components.button.getContent(),
				enterField: this.props.components.enterField.getContent(),
			},
		});
	}
}
