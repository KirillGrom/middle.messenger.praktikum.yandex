import {expect} from 'chai';
import enrichUrl, {API_HOST} from './index';

// eslint-disable-next-line no-undef
describe('Проверка формат URl', () => {
	// eslint-disable-next-line no-undef
	it('Склейка url', () => {
		expect(enrichUrl('profile')).to.equal(`${API_HOST}profile`);
	});

	it('На пустую строку', () => {
		expect(enrichUrl('')).to.equal(API_HOST);
	});
});
