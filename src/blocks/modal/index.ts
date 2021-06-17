
import modalTmpl from './modal.tmpl';
import {renderInDOM} from '../../utils/renderInDOM';
import Block from '../../modules/Block';
import Modal from '../../components/modal';
import ModalData from '../../components/modal/modal.data';
import parseTmpl from '../../utils/parseTmpl';

export default class ModalPopUp extends Block {
	constructor(props = {}) {
		super(modalTmpl, props);
	}

	render(): string {
		this.components = {
			modal: new Modal({modalList: ModalData}),
		};
		this.source = parseTmpl.call(this);
		const ctx = this._compile();
		return ctx(this.props);
	}
}

renderInDOM(document.querySelector('#modal'), new ModalPopUp().render());
