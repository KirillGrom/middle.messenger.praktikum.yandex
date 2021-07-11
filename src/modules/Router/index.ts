import Route from '../Route';
import {IRoute} from '../Route/route.type';

export default class Router {
	private routes: IRoute[];
	private history: History;
	private readonly _rootQuery: string;
	private _currentRoute: null | IRoute;
	private static __instance: Router;

	constructor(rootQuery: string) {
		if (Router.__instance) {
			// eslint-disable-next-line no-constructor-return
			return Router.__instance;
		}

		this.routes = [];
		this.history = window.history;
		this._currentRoute = null;
		this._rootQuery = rootQuery;

		Router.__instance = this;
	}

	use(pathname: string, block: Object) {
		const route = new Route(pathname, block, {rootQuery: this._rootQuery});

		this.routes.push(route);

		return this;
	}

	start(): void {
		window.onpopstate = ((event: Event) => {
			if (event.currentTarget) {
				this._onRoute((event.currentTarget as Window).location.pathname);
			}
		});

		this._onRoute(window.location.pathname);
	}

	_onRoute(pathname: string): void {
		const route = this.getRoute(pathname);
		if (!route) {
			return;
		}

		if (this._currentRoute && this._currentRoute !== route) {
			this._currentRoute.leave();
		}

		this._currentRoute = route;
		route.navigate(pathname);
	}

	go(pathname: string): void {
		this.history.pushState({}, '', pathname);
		this._onRoute(pathname);
	}

	back(): void {
		this.history.back();
	}

	forward(): void {
		this.history.forward();
	}

	getRoute(pathname: string): IRoute | undefined {
		return this.routes.find(route => route.match(pathname));
	}

	getCurrentPathName(): string | undefined {
		return this._currentRoute?.getPathName();
	}
}

