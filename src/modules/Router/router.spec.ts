import {expect} from 'chai';
import Router from './index';
import Index from '../../pages/index';

import Chat from '../../pages/chat';
import Login from '../../pages/login';

const router = new Router('#app');
router
	.use('/', Index)
	.use('/chats', Chat)
	.use('/login', Login)
	.start();

describe('Проверяем переходы у Роута', () => {
	it('Переход на новую страницу', () => {
		router.go('/login');
		expect(router.getCurrentPathName()).to.equal('/login');
	});
});
