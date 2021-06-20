// @ts-ignore
import Handlebars from 'handlebars';
// @ts-ignore
import {v4 as makeUUID} from 'uuid';
import EventBus from './EventBus';
import {BlockType} from '../types/block.type';

	type metaType = {
		tagName: string
		props:any
	}
export default class Block {
	static EVENTS = {
		INIT: 'init',
		FLOW_CDM: 'flow:component-did-mount',
		FLOW_CDU: 'flow:component-did-update',
		FLOW_RENDER: 'flow:render',
	};

	eventBus: () => EventBus;
	_element: HTMLElement;
	_meta:metaType;
	_id:string;
	props:any;
	/** JSDoc
	 * @param {string} tagName
	 * @param {Object} props
	 *
	 * @returns {void}
	 */
	constructor(tagName:string, props:BlockType): void {
		const eventBus = new EventBus();
		this._meta = {
			tagName,
			props,
		};

		this._id = makeUUID();
		this.props = this._makePropsProxy({...props, _id: this._id});

		this.eventBus = () => eventBus;

		this._registerEvents(eventBus);
		eventBus.emit(Block.EVENTS.INIT);
	}

	_registerEvents(eventBus:EventBus) {
		eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
		eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
		eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
		eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
	}

	_createResources() {
		const {tagName} = this._meta;
		this._element = this._createDocumentElement(tagName);
	}

	_compile(tmpl:string):Function {
		return (props:any) => {
			const compid = Handlebars.compile(tmpl, {noEscape: true})(props);
			const _element = new DOMParser().parseFromString(compid, 'text/html').body.children[0];
			if (props.components && _element) {
				for (const [key, instance] of Object.entries(props.components)) {
					const customTags = _element.querySelectorAll(`[data-component='${key}']`)[0];
					if (!customTags) {
						return _element;
					}

					if (Array.isArray(instance)) {
						instance.forEach(elm => customTags.insertAdjacentElement('beforebegin', elm));
					} else {
						customTags.insertAdjacentElement('beforebegin', instance as HTMLElement);
					}

					try {
						_element.removeChild(customTags);
					} catch (e) {

					}
				}
			}

			return _element;
		};
	}

	init() {
		this._createResources();
		this.eventBus().emit(Block.EVENTS.FLOW_CDM);
	}

	_componentDidMount() {
		this.componentDidMount();
		this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
	}

	_componentDidUpdate<T>(oldProps:T, newProps:T) {
		const response = this.componentDidUpdate(oldProps, newProps);
		if (!response) {
			return;
		}

		this._render();
	}

	componentDidMount() {}

	componentDidUpdate<T>(oldProps:T, newProps:T):boolean {
		return true;
	}

	setProps = (nextProps:Object) => {
		if (!nextProps) {
			return;
		}

		Object.assign(this.props, nextProps);
	};

	get element() {
		return this._element;
	}

	_render() {
		const block = this.render();
		this._element.insertAdjacentElement('afterbegin', block);
		this._removeEvents();
		this._addEvents();
	}

	render():HTMLElement {
		return document.createElement('div');
	}

	getContent() {
		return this.element;
	}

	_makePropsProxy(props:Object):Object {
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

	_createDocumentElement(tagName:string):HTMLElement {
		const element = document.createElement(tagName);
		element.classList.add(...this.props.class);
		element.setAttribute('data-id', this._id);
		if (this.props.href) {
			element.setAttribute('href', this.props.href);
		}

		return element;
	}

	_addEvents() {
		const {events = {}} = this.props;
		Object.keys(events).forEach(eventName => {
			this._element.addEventListener('click', events[eventName]);
		});
	}

	_removeEvents() {
		const {events = {}} = this.props;
		Object.keys(events).forEach(eventName => {
			this._element.removeEventListener(eventName, events[eventName]);
		});
	}

	show() {
		this.getContent().style.display = 'block';
	}

	hide() {
		this.getContent().style.display = 'none';
	}
}
