// @ts-ignore
import Handlebars from 'handlebars';
import Block from '../../modules/Block';
import {renderInDOM} from '../../utils/renderInDOM';
import indexTmpl from './index.tmpl';
import Aside from '../../components/aside';
import {BlockType} from '../../types/block.type';
import Main from '../../components/main';

class Index extends Block {
	constructor(props: BlockType) {
		const components = {
			aside: new Aside({}),
			main: new Main({
				isEmpty: true,
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

renderInDOM(document.querySelector('#app'), new Index({}).getContent());
