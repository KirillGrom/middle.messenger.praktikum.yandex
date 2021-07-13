import Handlebars from 'handlebars';
import Block from '../../modules/Block';
import profileButtonTmpl from './profileButton.tmpl';
import {ProfileButtonType} from './profileButton.type';

export default class ProfileButton extends Block {
	constructor(props: ProfileButtonType) {
		super('div', props);
	}

	render(): Function {
		return Handlebars.compile(profileButtonTmpl);
	}
}
