import Handlebars from 'handlebars';
import FooterTmpl from './footer.tmpl';
import Block from '../../modules/Block';
import FormMsg from '../formMsg';
import FormService from '../../modules/Form';
import {BlockType} from '../../types/block.type';
import getFormDataValue from '../../utils/getFormDataValue';
import ChatController from '../../controllers/chat/chat.controller';

export default class Footer extends Block {
	constructor(props: BlockType) {
		const components = {
			formMsg: new FormMsg({
				events: {
					focusout: (event:Event) => {
						FormService.inputEventHandler(event);
					},
					focusin: (event:Event) => {
						FormService.inputEventHandler(event);
					},
					submit: (event:Event) => {
						event.preventDefault();
						const form = event.target as HTMLFormElement;
						const formData = new FormData(form);
						try {
							ChatController.sendMessage(getFormDataValue(formData));
						} catch (error) {
							FormService.checkValidating(event);
						}
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
