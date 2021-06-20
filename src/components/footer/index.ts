import FooterTmpl from './footer.tmpl';
import Block from '../../modules/Block';
import {FooterType} from './footer.type';
import FormMsg from '../formMsg';
import Form from '../../modules/form';

export default class Footer extends Block {
	constructor(props:FooterType) {
		const formService = new Form();
		const components = {
			formMsg: new FormMsg({
				class: ['form-message__form'],
				events: {
					focusout: (event:Event) => {
						formService.inputEventHandler(event);
					},
					focusin: (event:Event) => {
						formService.inputEventHandler(event);
					},
					submit: (event:Event) => {
						event.preventDefault();
						formService.submit(event.currentTarget as HTMLFormElement);
					},
				},
			}),
		};
		super('footer', {...props, components});
	}

	render():HTMLElement {
		return this._compile(FooterTmpl)({
			...this.props,
			components: {
				formMsg: this.props.components.formMsg.getContent(),
			},
		});
	}
}
