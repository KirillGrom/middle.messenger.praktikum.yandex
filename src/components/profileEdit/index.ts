import profileEditTmpl from './profileEdit.tmpl';
import Block from '../../modules/Block';
import Avatar from '../avatar';
import {ProfileEditType} from './profileEdit.type';
import ProfileBlockItem from '../profileBlockItem';

export default class ProfileEdit extends Block {
	constructor(props:ProfileEditType) {
		const components = {
			avatar: new Avatar({
				imgSrc: props.imgSrc,
				class: ['avatar', 'avatar--big', 'profile-edit__avatar'],
			}),
			profileBlockItem: props.inputList.map(data => new ProfileBlockItem({...data, class: ['profile-block__item'], tagName: 'div'})),
		};
		super('div', {...props, components});
	}

	render(): HTMLElement {
		return this._compile(profileEditTmpl)({
			...this.props,
			components: {
				avatar: this.props.components.avatar.getContent(),
				profileBlockItem: this.props.components.profileBlockItem.map((item: { getContent: () => HTMLElement; }) => item.getContent()),
			},
		});
	}
}
