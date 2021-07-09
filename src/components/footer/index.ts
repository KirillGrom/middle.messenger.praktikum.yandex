// @ts-ignore
import Handlebars from 'handlebars';
import FooterTmpl from './footer.tmpl';
import Block from '../../modules/Block';
import FormMsg from '../formMsg';
import Form from '../../modules/Form';
import {BlockType} from '../../types/block.type';
import getFormDataValue from '../../utils/getFormDataValue';
import ChatController from '../../controllers/chat/chat.controller';

const chatController = new ChatController();

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
						const form = event.target as HTMLFormElement;
						const formData = new FormData(form);
						chatController.sendMessage(getFormDataValue(formData));
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
