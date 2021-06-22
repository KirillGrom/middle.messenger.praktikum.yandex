// @ts-ignore
import Handlebars from 'handlebars';
import errorTmpl from './error.tmpl';
import {renderInDOM} from '../../utils/renderInDOM';
import Block from '../../modules/Block';
import {BlockType} from '../../types/block.type';
import ErrorPage from '../../components/errorPage';

export default class Page500 extends Block {
	constructor(props: BlockType) {
		const components = {
			error: new ErrorPage({
				text: 'Не туда попал',
				code: '404',
			}),
		};
		super('div', {...props, components});
	}

	render(): Function {
		return Handlebars.compile(errorTmpl);
	}
}
renderInDOM(document.querySelector('#app'), new Page500({}).getContent());
