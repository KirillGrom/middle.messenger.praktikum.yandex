import Router from './services/router';
import {IPage} from './types/page.type';
import Index from './pages/index';
import Chat from './pages/chat';
import Login from './pages/login';
import Password from './pages/password';
import Page404 from './pages/error/404';
import Page500 from './pages/error/500';
import Registration from './pages/registration';
import ProfilePage from './pages/profile';
import ProfileEditPage from './pages/profileEdit';

Router
	.use('/', Index as unknown as IPage)
	.use('/chats', Chat as unknown as IPage)
	.use('/login', Login as unknown as IPage)
	.use('/signup', Registration as unknown as IPage)
	.use('/password', Password as unknown as IPage)
	.use('/profile', ProfilePage as unknown as IPage)
	.use('/profileEdit', ProfileEditPage as unknown as IPage)
	.use('/404', Page404 as unknown as IPage)
	.use('/500', Page500 as unknown as IPage)
	.start();
