import Block from '../../modules/Block';
import {renderInDOM} from '../../utils/renderInDOM';
import indexTmpl from './chat.tmpl';
import Aside from '../../components/aside';
import {BlockType} from '../../types/block.type';
import Main from '../../components/main';

class Chat extends Block {
	constructor(props:BlockType) {
		const components = {
			aside: new Aside({class: ['aside']}),
			main: new Main({
				class: ['main'],
				isEmpty: false,
				contentHeader: '',
				contentMain: '',
				contentFooter: ''}),
		};
		super('div', {...props, components});
	}

	render(): HTMLElement {
		return this._compile(indexTmpl)({
			components: {
				aside: this.props.components.aside.getContent(),
				main: this.props.components.main.getContent(),
			},
		});
	}
}

renderInDOM(document.querySelector('#app'), new Chat({class: ['wrapper']}).getContent());
