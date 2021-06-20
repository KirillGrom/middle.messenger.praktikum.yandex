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
				class: ['error-page'],
			}),
		};
		super('div', {...props, components});
	}

	render(): HTMLElement {
		return this._compile(errorTmpl)({
			...this.props,
			components: {
				error: this.props.components.error.getContent(),
			},
		});
	}
}
renderInDOM(document.querySelector('#app'), new Page500({class: ['wrapper']}).getContent());
