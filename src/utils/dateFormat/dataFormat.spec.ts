import {expect} from 'chai';
import dateFormat from './index';

// eslint-disable-next-line no-undef
describe('Проверка формат дата ', () => {
	// eslint-disable-next-line no-undef
	it('Возврат времени', () => {
		expect(dateFormat('2021-07-08T14:05:52+00:00')).to.equal('17:5');
	});

	it('Проверка на не валидную строку', () => {
		expect(dateFormat('вапвп')).to.equal('');
	});

	it('Проверка на пустую строку', () => {
		expect(dateFormat('вапвп')).to.equal('');
	});
});
