// @ts-ignore
import Handlebars from 'handlebars';
import Block from '../../modules/Block';
import {renderInDOM} from '../../utils/renderInDOM';
import indexTmpl from './chat.tmpl';
import Aside from '../../components/aside';
import {BlockType} from '../../types/block.type';
import Main from '../../components/main';

class Chat extends Block {
	constructor(props: BlockType) {
		const components = {
			aside: new Aside({}),
			main: new Main({
				isEmpty: false,
				contentHeader: '',
				contentMain: '',
				contentFooter: ''}),
		};
		super('div', {...props, components});
	}

	render(): Function {
		return Handlebars.compile(indexTmpl);
	}
}

renderInDOM(document.querySelector('#app'), new Chat({}).getContent());
