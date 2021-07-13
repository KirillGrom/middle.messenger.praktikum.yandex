import get from '../../utils/get';
import Store from '../../modules/Store';

enum WS_EVENTS {
	OPEN = 'open',
	CLOSE = 'close',
	MESSAGE = 'message',
	ERROR = 'error',
}

export default class WebSocketModule {
	socket: WebSocket;

	private _registerEvents(socket: WebSocket): void {
		socket.addEventListener(WS_EVENTS.OPEN, this.open.bind(this));
		socket.addEventListener(WS_EVENTS.CLOSE, this.close.bind(this));
		socket.addEventListener(WS_EVENTS.MESSAGE, this.message.bind(this));
		socket.addEventListener(WS_EVENTS.ERROR, this.error.bind(this));
	}

	public sendMsg(content: string): void {
		this.socket.send(JSON.stringify({
			content,
			type: 'message',
		}));
	}

	public oldMsg(): void {
		this.socket.send(JSON.stringify({
			content: '0',
			type: 'get old',
		}));
	}

	private open(): void {
		console.log('Соединение установлено');
		this.oldMsg();
	}

	private close(event): void {
		if (event.wasClean) {
			console.log('Соединение закрыто чисто');
		} else {
			console.log('Обрыв соединения');
		}

		console.log(`Код: ${event.code} | Причина: ${event.reason}`);
	}

	private message(event): void {
		console.log('Получены данные');
		const data = JSON.parse(event.data);
		if (Array.isArray(data)) {
			Store.commit('message', data);
		} else {
			Store.commit('message', [data]);
		}
	}

	private error(event): void {
		console.log('Ошибка', event.message);
	}

	public connect(): void {
		if (this.socket) {
			this.closeConnect();
			Store.commit('clearMessage');
		}

		const chatId = get(Store.getState(), 'currentChat.id');
		const chatToken = get(Store.getState(), 'chatToken');
		const userId = get(Store.getState(), 'user.id');
		this.socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${chatToken}`);

		this._registerEvents(this.socket);
	}

	private closeConnect(): void {
		this.socket.close();
		this.deleteAllEvent();
	}

	public deleteAllEvent(): void {
		this.socket.removeEventListener(WS_EVENTS.OPEN, this.open);
		this.socket.removeEventListener(WS_EVENTS.CLOSE, this.close);
		this.socket.removeEventListener(WS_EVENTS.MESSAGE, this.message);
		this.socket.removeEventListener(WS_EVENTS.ERROR, this.error);
	}
}
