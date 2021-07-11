import Router from './services/router';
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
	.use('/', Index)
	.use('/chats', Chat)
	.use('/login', Login)
	.use('/signup', Registration)
	.use('/password', Password)
	.use('/profile', ProfilePage)
	.use('/profileEdit', ProfileEditPage)
	.use('/404', Page404)
	.use('/500', Page500)
	.start();
