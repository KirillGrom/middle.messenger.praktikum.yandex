import ProfileBlockTmpl from './profileBlock.tmpl';
import Block from '../../modules/Block';
import Avatar from '../avatar';
import {ProfileBlockType} from './profileBlock.type';
import ProfileBlockItem from '../profileBlockItem';

export default class ProfileBlock extends Block {
	constructor(props:ProfileBlockType) {
		const components = {
			avatar: new Avatar({imgSrc: props.imgSrc, class: ['avatar', 'avatar--big', 'profile-block__avatar']}),
			profileBlockItem: props.inputList.map(data => new ProfileBlockItem({...data, class: ['profile-block__item'], tagName: 'li'})),
		};
		super('div', {...props, components});
	}

	render(): HTMLElement {
		return this._compile(ProfileBlockTmpl)({
			...this.props,
			components: {
				avatar: this.props.components.avatar.getContent(),
				profileBlockItem: this.props.components.profileBlockItem.map((item: { getContent: () => HTMLElement; }) => item.getContent()),
			},
		});
	}
}
