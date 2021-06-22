// @ts-ignore
import Handlebars from 'handlebars';
import FooterTmpl from './footer.tmpl';
import Block from '../../modules/Block';
import FormMsg from '../formMsg';
import Form from '../../modules/form';
import {BlockType} from '../../types/block.type';

export default class Footer extends Block {
	constructor(props: BlockType) {
		const formService = new Form();
		const components = {
			formMsg: new FormMsg({
				events: {
					focusout: (event:Event) => {
						formService.inputEventHandler(event);
					},
					focusin: (event:Event) => {
						formService.inputEventHandler(event);
					},
					submit: (event:Event) => {
						event.preventDefault();
						formService.submit(event);
					},
				},
			}),
		};
		super('div', {...props, components});
	}

	render(): Function {
		return Handlebars.compile(FooterTmpl);
	}
}
