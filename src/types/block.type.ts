import {EventBusType} from './eventBus.type';
import {metaType} from '../modules/Block';

export type BlockType = {
	[key:string]:any
}

export interface IBlock {
	eventBus: EventBusType;
	_element: HTMLElement;
	_meta: metaType;
	_id: string;
	props: any;
	element: HTMLElement;
	_registerEvents(eventBus: EventBusType): void;
	_createResources(): void;
	_compileInDomElement(tmpl: string): HTMLElement;
	_render(): void;
	init(): void;
	_componentDidMount(): void;
	_componentDidUpdate<T>(oldProps: T, newProps: T): void;
	_render(): void;
	componentDidMount(): void;
	isPropsChanged<T>(oldProps: T, newProps: T): boolean;
	setProps(nextProps: Object): void;
	render(): Function;
	getContent(): HTMLElement;
	_makePropsProxy(props: Object): Object;
	_createDocumentElement(tagName: string): HTMLElement;
	_addEvents(): void;
	_removeEvents(): void;
	show(): void;
	hide(): void;
	destruction(): void;
}
