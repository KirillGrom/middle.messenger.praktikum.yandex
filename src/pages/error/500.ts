// @ts-ignore
import Handlebars from 'handlebars';
import errorTmpl from './error.tmpl';
import Block from '../../modules/Block';
import ErrorPage from '../../components/errorPage';

export default class Page500 extends Block {
	constructor() {
		const components = {
			error: new ErrorPage({
				text: 'Мы уже фиксим',
				code: '500',
			}),
		};
		super('div', {components});
	}

	render(): Function {
		return Handlebars.compile(errorTmpl);
	}
}

