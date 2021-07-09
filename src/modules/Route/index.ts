import {renderInDOM} from '../../utils/renderInDOM';
import {RouteType} from './route.type';
import {IPage} from '../../types/page.type';

function isEqual(lhs: string, rhs: string): boolean {
	return lhs === rhs;
}

export default class Route {
	private _pathname: string;
	private readonly _blockClass: IPage;
	private _block: null | IPage;
	private _props: RouteType;

	constructor(pathname: string, view: IPage, props: RouteType) {
		this._pathname = pathname;
		this._blockClass = view;
		this._block = null;
		this._props = props;
	}

	navigate(pathname: string): void {
		if (this.match(pathname)) {
			this._pathname = pathname;
			this.render();
		}
	}

	leave(): void {
		if (this._block) {
			this._block.destruction();
		}
	}

	match(pathname: string): boolean {
		return isEqual(pathname, this._pathname);
	}

	render(): void {
		// @ts-ignore
		this._block = new this._blockClass();
		renderInDOM(document.querySelector(this._props.rootQuery), this._block?.getContent());
	}

	getPathName(): string {
		return this._pathname;
	}
}
