export type EventBusType = {
	on:(event:string, callback:Function) => void;
	off:(event:string, callback:Function) => void;
	emit:(event:string, ...args: undefined[]) => void;
}
