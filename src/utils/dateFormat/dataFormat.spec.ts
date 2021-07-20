import {expect} from 'chai';
import dateFormat from './index';

describe('Проверка формат дата ', () => {
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
