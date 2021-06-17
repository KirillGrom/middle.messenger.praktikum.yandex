import indexTmpl from './index.tmpl';
import Block from '../../modules/Block';
import {renderInDOM} from '../../utils/renderInDOM';

import Aside from '../../components/aside';
import Main from '../../components/main';
import parseTmpl from '../../utils/parseTmpl';
import {pageEnum, PageType} from '../../types/page.type';

class Index extends Block {
	constructor(props:PageType) {
		super(indexTmpl, props);
	}

	render() {
		this.components = {
			aside: new Aside(),
			main: new Main({
				class: '',
				isEmpty: true,
				contentHeader: '',
				contentMain: '',
				contentFooter: '',
			}),
		};
		this.source = parseTmpl.call(this);
		const ctx = this._compile();
		return ctx(this.props);
	}
}

renderInDOM(document.querySelector('#app'),
	new Index({
		type: pageEnum.chat,
	}).render());
