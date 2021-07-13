import {renderInDOM} from '../../utils/renderInDOM';
import {RouteType} from './route.type';
import {IBlock} from '../../types/block.type';

function isEqual(lhs: string, rhs: string): boolean {
	return lhs === rhs;
}

export default class Route {
	private _pathname: string;
	private readonly _blockClass: IBlock;
	private _block: null | IBlock;
	private _props: RouteType;

	constructor(pathname: string, view: IBlock, props: RouteType) {
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
