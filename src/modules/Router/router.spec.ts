import {expect} from 'chai';
import globalWindow from '../../../test/globalWindow';
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
// eslint-disable-next-line no-undef
describe('Проверяем переходы у Роута', () => {
	it('Переход на новую страницу', () => {
		router.go('/login');
		expect(router.getCurrentPathName()).to.equal('/login');
	});
});
