import ProfileTmpl from './profile.tmpl';
import Block from '../../modules/Block';
import ProfileBlock from '../profileBlock';
import ProfileEdit from '../profileEdit';
import {ProfileType} from './profile.type';

export default class Profile extends Block {
	constructor(props:ProfileType) {
		const name = props.name ? props.name : '';
		const components = {
			profileEdit: new ProfileEdit({
				imgSrc: props.imgSrc,
				name,
				inputList: props.inputList,
				class: ['profile-block', 'profile-edit']}),

			profileBlock: new ProfileBlock({
				imgSrc: props.imgSrc,
				name: props.name ? props.name : '',
				inputList: props.inputList, class: ['profile-block']}),
		};
		super('div', {...props, components});
	}

	render(): HTMLElement {
		return this._compile(ProfileTmpl)({
			...this.props,
			components: {
				profileBlock: this.props.isEdit
					? this.props.components.profileEdit.getContent()
					: this.props.components.profileBlock.getContent(),
			},

		});
	}
}
