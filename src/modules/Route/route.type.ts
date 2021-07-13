export type RouteType = {
	rootQuery: string;
	[key:string]: unknown;
}

export interface IRoute {
	getPathName(): string;
	navigate(pathname: string): void;
	leave(): void;
	match(pathname: string): boolean;
	render(): void;
}
