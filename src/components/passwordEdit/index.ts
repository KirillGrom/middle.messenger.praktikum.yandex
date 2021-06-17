import PasswordEditTmpl from './passwordEdit.tmpl';
import Block from '../../modules/Block';
import Avatar from '../avatar';
import parseTmpl from '../../utils/parseTmpl';
import EnterField from '../enterField';

export default class PasswordEdit extends Block {
	constructor(props: EnterField[]) {
		super(PasswordEditTmpl, props);
	}

	render(): string {
		this.components = {
			avatar: new Avatar({imgSrc: this.props.imgSrc, class: 'avatar--big profile-edit__avatar'}),
		};
		this.source = parseTmpl.call(this);
		const ctx = this._compile();
		return ctx(this.props);
	}
}
