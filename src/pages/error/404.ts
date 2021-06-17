import errorTmpl from './error.tmpl';
import {renderInDOM} from '../../utils/renderInDOM';
import Block from '../../modules/Block';
import ErrorPage from '../../components/errorPage';
import parseTmpl from '../../utils/parseTmpl';
import {pageEnum, PageType} from '../../types/page.type';

export default class Page404 extends Block {
	constructor(props:PageType) {
		super(errorTmpl, props);
	}

	render(): string {
		this.components = {
			error: new ErrorPage({
				code: '404',
				text: 'Не туда попали',
			}),
		};
		this.source = parseTmpl.call(this);
		const ctx = this._compile();
		return ctx(this.props);
	}
}
renderInDOM(document.querySelector('#app'), new Page404({type: pageEnum.error}).render());
