import ErrorPageTmpl from './errorPage.tmpl';
import Block from '../../modules/Block';
import {ErrorPageType} from './errorPage.type';

export default class ErrorPage extends Block {
	constructor(props: ErrorPageType) {
		super(ErrorPageTmpl, props);
	}
}
