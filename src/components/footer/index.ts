
import FooterTmpl from './footer.tmpl';
import Block from '../../modules/Block';

export default class Footer extends Block {
	constructor(prop = {}) {
		super(FooterTmpl, prop);
	}
}
