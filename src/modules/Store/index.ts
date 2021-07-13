import EventBus from '../EventBus';
import {EventBusType} from '../../types/eventBus.type';
import mutation from './mutation';
import {EVENTS} from './events';

class Store {
	private state: Object;
	public eventBus: EventBusType;
	public mutations: Record<string, Function>;

	constructor() {
		this.state = {
			user: {},
			chats: [],
			chatToken: '',
			currentChat: {},
			message: [],
		};

		this.mutations = mutation;

		this.state = this._makeStateProxy(this.state);
		this.eventBus = new EventBus();
		this.eventBus.on(EVENTS.FLOW_SDU, () => {});
	}

	public getState() {
		return this.state;
	}

	private _makeStateProxy(state: Object): Object {
		const self = this;
		return new Proxy(state, {
			get(target:Record<string, any>, prop:string) {
				const value = target[prop];
				return typeof value === 'function' ? value.bind(target) : value;
			},
			set(target, prop:string, value) {
				target[prop] = value;
				self.eventBus.emit(EVENTS.FLOW_SDU);
				return true;
			},
			deleteProperty() {
				throw new Error('нет доступа');
			},
		});
	}

	public commit<T>(mutationKey: string, payload?: T) {
		try {
			if (typeof this.mutations[mutationKey] !== 'function') {
				throw Error(`Нет такой "${mutationKey}" мутации`);
			}

			const newState = this.mutations[mutationKey](this.state, payload);
			this.state = this._makeStateProxy({...this.state, ...newState});
			return true;
		} catch (error) {
			throw Error(error);
		}
	}
}

export default new Store();
