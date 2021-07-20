import {expect} from 'chai';
import enrichUrl from './index';
import {API_HOST} from '../constants/API_HOST';

describe('Проверка формат URl', () => {
	it('Склейка url', () => {
		expect(enrichUrl('profile')).to.equal(`${API_HOST}profile`);
	});

	it('На пустую строку', () => {
		expect(enrichUrl('')).to.equal(API_HOST);
	});
});
