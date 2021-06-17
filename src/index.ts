import modal from './modules/modal';
import Form from './modules/form';

declare global {
	interface Window {
		chat:any;
	}
}
window.chat = {
	modal,
	form: new Form(),
};

modal.initEvents();
