import {expect} from 'chai';
import globalWindow from '../../../test/globalWindow';
globalWindow;
import Router from './index';
import Index from '../../pages/index';
import {IPage} from '../../types/page.type';
import Chat from '../../pages/chat';
import Login from '../../pages/login';

const router = new Router('#app');
router
	.use('/', Index as unknown as IPage)
	.use('/chats', Chat as unknown as IPage)
	.use('/login', Login as unknown as IPage)
	.start();
// eslint-disable-next-line no-undef
describe('Проверяем переходы у Роута', () => {

	it('Переход на новую страницу', () => {
		router.go('/login');
		expect(router.getCurrentPathName()).to.equal('/login');
	});
});
