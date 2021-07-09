// @ts-ignore
import Handlebars from 'handlebars';
import errorTmpl from './error.tmpl';
import Block from '../../modules/Block';
import ErrorPage from '../../components/errorPage';
import router from '../../services/router';

export default class Page404 extends Block {
	constructor() {
		const components = {
			error: new ErrorPage({
				text: 'Не туда попал',
				code: '404',
				events: {
					click: () => {
						router.go('/');
					},
				},
			}),
		};
		super('div', {components});
	}

	render(): Function {
		return Handlebars.compile(errorTmpl);
	}
}

