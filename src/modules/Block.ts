// @ts-ignore
import Handlebars from 'handlebars';
// @ts-ignore
import {v4 as makeUUID} from 'uuid';

import EventBus from './EventBus';

	enum EVENTS {
	INIT = 'init',
	FLOW_CDM = 'flow:component-did-mount',
	FLOW_RENDER ='flow:render',
	FLOW_CDU ='flow:component-did-update',
	}

	type metaType = {
	source:string;
	template: string
	}

export default class Block {
	private _meta:metaType;
	readonly _id = null;
	protected props:Object
	private eventBus = () => new EventBus()
	public components = {};
	/** JSDoc
	 * @param {string} source
	 * @param {Object} props
	 *
	 * @returns {void}
	 */
	constructor(source: string = '', props:Object = {}) {
		const eventBus = new EventBus();
		this._meta = {
			source,
			template: source,
		};

		this._id = makeUUID();
		this.props = this._makePropsProxy({...props, _id: this._id});

		this.eventBus = () => eventBus;

		this._registerEvents(eventBus);
		eventBus.emit(EVENTS.INIT);
	}

	_registerEvents(eventBus: EventBus) {
		eventBus.on(EVENTS.INIT, this.init.bind(this));
		eventBus.on(EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
		eventBus.on(EVENTS.FLOW_RENDER, this.render.bind(this));
		eventBus.on(EVENTS.FLOW_CDU, this.componentDidUpdate.bind(this));
	}

	init() {
		this.eventBus().emit(EVENTS.FLOW_CDM);
	}

	_componentDidMount() {
		this.eventBus().emit(EVENTS.FLOW_RENDER);
	}

	_componentDidUpdate<T>(oldProps:T, newProps:T):void {
		const response = this.isComponentDidUpdate(oldProps, newProps);
		if (response) {
			this.eventBus().emit(EVENTS.FLOW_CDU);
		}
	}

	componentDidUpdate():void {
		const _element = this.getContent();
		if (_element) {
			const _parent = _element.parentNode;
			const _newElement = new DOMParser().parseFromString(this.render(), 'text/html').body.firstChild;
			if (_parent && _newElement) {
				_parent.replaceChild(_newElement, _element);
			}
		}
	}

	isComponentDidUpdate<T>(oldProps:T, newProps:T):boolean {
		return JSON.stringify(oldProps) !== JSON.stringify(newProps);
	}

	setProps = (nextProps:Object) => {
		if (!nextProps) {
			return;
		}

		// @ts-ignore
		Object.assign(this.props, nextProps);
	};

	get source() {
		return this._meta.source;
	}

	set source(value:string) {
		this._meta.source = value;
	}

	get template() {
		return this._meta.template;
	}

	render():string {
		const template = this._compile();
		return template(this.props);
	}

	_compile() {
		return Handlebars.compile(this.source, {noEscape: true});
	}

	getContent(): HTMLElement | null {
		return document.querySelector(`[data-id='${this._id}']`);
	}

	_makePropsProxy(props:Object):Object {
		const self = this;
		const oldProps = JSON.parse(JSON.stringify(props));
		// @ts-ignore
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

	show():void {
		const _element = this.getContent();
		if (_element) {
			_element.style.display = 'block';
		}
	}

	hide():void {
		const _element = this.getContent();
		if (_element) {
			_element.style.display = 'none';
		}
	}
}
