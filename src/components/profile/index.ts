// @ts-ignore
import Handlebars from 'handlebars';
import ProfileTmpl from './profile.tmpl';
import Block from '../../modules/Block';
import ProfileBlock from '../profileBlock';
import ProfileEdit from '../profileEdit';
import {ProfileType} from './profile.type';
import Form from '../../modules/form';

export default class Profile extends Block {
	constructor(props: ProfileType) {
		const formService = new Form();
		const name = props.name ? props.name : '';
		const components = {
			profileEdit: new ProfileEdit({
				imgSrc: props.imgSrc,
				name,
				inputList: props.inputList,
				events: {
					focusout: (event:Event) => {
						formService.inputEventHandler(event);
					},
					focusin: (event:Event) => {
						formService.inputEventHandler(event);
					},
					submit: (event:Event) => {
						formService.submit(event);
					},
				},
			}),
			profileBlock: new ProfileBlock({
				imgSrc: props.imgSrc,
				name,
				inputList: props.inputList}),
		};
		if (props.isEdit) {
			components.profileBlock.hide();
		} else {
			components.profileEdit.hide();
		}

		super('div', {...props, components});
	}

	render(): Function {
		return Handlebars.compile(ProfileTmpl);
	}
}
