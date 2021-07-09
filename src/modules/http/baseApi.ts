import Http from './index';

type configType = {
	baseUrl: string;
	endpoint: string;
}

export default class BaseApi {
	baseUrl: string;
	endpoint: string;
	http: Http;

	constructor(config: configType) {
		this.baseUrl = config.baseUrl;
		this.endpoint = config.endpoint;
		this.http = new Http();
	}

	getUrl(name: string) {
		return `${this.baseUrl}/${this.endpoint}/${name}`;
	}
}
