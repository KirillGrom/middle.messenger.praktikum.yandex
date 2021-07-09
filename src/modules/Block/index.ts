// @ts-ignore
import {v4 as makeUUID} from 'uuid';
import EventBus from '../EventBus';
import {BlockType} from '../../types/block.type';
import {EventBusType} from '../../types/eventBus.type';
import Store from '../Store';
import {EVENTS} from '../Store/events';

export type metaType = {
	tagName: string;
	props: any;
}

export default class Block {
	static EVENTS = {
		INIT: 'init',
		FLOW_CDM: 'flow:component-did-mount',
		FLOW_CDU: 'flow:component-did-update',
		FLOW_RENDER: 'flow:render',
	};

	eventBus: EventBusType;
	_element: HTMLElement;
	_meta: metaType;
	_id: string;
	props: any;
	store: Store | Object;

	/** JSDoc
	 * @param {string} tagName
	 * @param {Object} props
	 *
	 * @param store
	 * @returns {void}
	 */
	constructor(tagName: string, props: BlockType, store = {}) {
		this._meta = {
			tagName,
			props,
		};

		this._id = makeUUID();
		this.props = this._makePropsProxy({...props, _id: this._id});
		this.store = store;

		this.eventBus = new EventBus();

		this._registerEvents(this.eventBus);
		this.eventBus.emit(Block.EVENTS.INIT);
	}

	_registerEvents(eventBus: EventBusType): void {
		eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
		eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
		eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
		eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
	}

	_createResources(): void {
		const {tagName} = this._meta;
		this._element = this._createDocumentElement(tagName);
	}

	_compileInDomElement(tmpl: string): HTMLElement {
		const {body} = new DOMParser().parseFromString(tmpl, 'text/html');
		const _element = body.children[0];

		if (this.props.components && _element) {
			for (const [key, instance] of Object.entries(this.props.components)) {
				const customTags = _element.querySelectorAll(`[data-component='${key}']`)[0];
				const instanceResult = typeof instance === 'function' ? instance() : instance;
				if (!customTags) {
					return _element as HTMLElement;
				}

				if (Array.isArray(instanceResult)) {
					instanceResult.forEach(elm => customTags.insertAdjacentElement('beforebegin', elm.getContent()));
				} else {
					// @ts-ignore
					customTags.insertAdjacentElement('beforebegin', instanceResult.getContent() as HTMLElement);
				}

				customTags.parentElement?.removeChild(customTags);
			}
		}

		return _element as HTMLElement;
	}

	_render(): void {
		const compileTemplate = this.render();
		const html = compileTemplate({...this.props});
		const element = this._compileInDomElement(html);
		while (this._element.firstChild) {
			this._element.firstChild.remove();
		}

		this._element.insertAdjacentElement('afterbegin', element);
		this._removeEvents();
		this._addEvents();
	}

	init(): void {
		this._createResources();
		this.eventBus.emit(Block.EVENTS.FLOW_CDM);
	}

	_componentDidMount(): void {
		this.componentDidMount();
		this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
		if (this.store instanceof Store) {
			this.store.eventBus.on(EVENTS.FLOW_SDU, this._render.bind(this));
		}
	}

	_componentDidUpdate<T>(oldProps: T, newProps: T): void {
		const response = this.isPropsChanged(oldProps, newProps);
		if (!response) {
			return;
		}

		this._render();
	}

	componentDidMount(): void {}

	isPropsChanged<T>(oldProps: T, newProps: T): boolean {
		return true;
	}

	setProps = (nextProps: Object): void => {
		if (!nextProps) {
			return;
		}

		Object.assign(this.props, nextProps);
	};

	get element(): HTMLElement {
		return this._element;
	}

	render(): Function {
		return () => {};
	}

	getContent(): HTMLElement {
		return this.element;
	}

	_makePropsProxy(props: Object): Object {
		const self = this;
		const oldProps = JSON.parse(JSON.stringify(props));
		return new Proxy(props, {
			get(target:Record<string, any>, prop:string) {
				const value = target[prop];
				return typeof value === 'function' ? value.bind(target) : value;
			},
			set(target, prop:string, value) {
				target[prop] = value;
				self._componentDidUpdate(oldProps, target);
				return true;
			},
			deleteProperty() {
				throw new Error('нет доступа');
			},
		});
	}

	_createDocumentElement(tagName: string): HTMLElement {
		const element = document.createElement(tagName);
		element.setAttribute('data-id', this._id);
		return element;
	}

	_addEvents(): void {
		const {events = {}} = this.props;
		Object.keys(events).forEach(eventName => {
			this._element.addEventListener(eventName, events[eventName]);
		});
	}

	_removeEvents(): void {
		const {events = {}} = this.props;
		Object.keys(events).forEach(eventName => {
			this._element.removeEventListener(eventName, events[eventName]);
		});
	}

	show(): void {
		this.getContent().style.display = 'block';
	}

	hide(): void {
		this.getContent().style.display = 'none';
	}

	destruction(): void {
		const element = this.getContent();
		const parent = element.parentNode;
		if (parent) {
			parent.removeChild(element);
		}
	}
}
