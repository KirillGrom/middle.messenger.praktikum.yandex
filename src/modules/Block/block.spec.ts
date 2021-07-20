// @ts-ignore
import Handlebars from 'handlebars';
import {expect} from 'chai';
import Block from './index';

const tmpl = '<div>{{text}}</div>';
class ComponentTest extends Block {
	constructor() {
		super('div', {text: 'Test', events: {
			click: () => {},
		}});
	}

	render() {
		return Handlebars.compile(tmpl);
	}
}

describe('Проверяем Block', () => {
	const componentTestInst = new ComponentTest();
	const content = componentTestInst.getContent();
	const child = content.querySelector('div');

	it('Вставка  пропсов', () => {
		expect(child?.textContent).to.equal('Test');
	});
});
