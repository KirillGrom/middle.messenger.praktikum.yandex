import errorTmpl from './error.tmpl';
import layoutData from '../../layout/layout.data';
import {renderInDOM} from '../../utils/renderInDOM';
import Block from '../../modules/Block';
import ErrorPage from '../../components/errorPage';
import parseTmpl from '../../utils/parseTmpl';
import {pageEnum, PageType} from '../../types/page.type';

export default class Page500 extends Block {
	constructor(props: PageType) {
		super(errorTmpl, props);
	}

	render(): string {
		this.components = {
			error: new ErrorPage({
				code: '500',
				text: 'Мы уже фиксим',
			}),
		};
		this.source = parseTmpl.call(this);
		const ctx = this._compile();
		return ctx(this.props);
	}
}
renderInDOM(document.querySelector('#app'), new Page500({type: pageEnum.error}).render());
