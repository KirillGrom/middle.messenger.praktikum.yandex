import chatTmpl from './chat.tmpl';
import Block from '../../modules/Block';
import {renderInDOM} from '../../utils/renderInDOM';

import Aside from '../../components/aside';
import Main from '../../components/main';
import parseTmpl from '../../utils/parseTmpl';
import {pageEnum, PageType} from '../../types/page.type';

class Chat extends Block {
	constructor(props:PageType) {
		super(chatTmpl, props);
	}

	render() {
		this.components = {
			aside: new Aside(),
			main: new Main({
				class: '',
				isEmpty: false,
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
	new Chat({
		type: pageEnum.chat,
	}).render());
