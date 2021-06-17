import modalTmpl from './modal.tmpl';
import Block from '../../modules/Block';
import {ModalType} from './modal.type';
import parseTmpl from '../../utils/parseTmpl';
import BoxModal from '../boxModal';

export default class Modal extends Block {
	props:ModalType;
	constructor(props:ModalType) {
		super(modalTmpl, props);
	}

	render():string {
		this.components = {
			boxModal: this.props.modalList.map(props => new BoxModal({...props})),
		};

		this.source = parseTmpl.call(this);
		const ctx = this._compile();
		return ctx(this.props);
	}
}
