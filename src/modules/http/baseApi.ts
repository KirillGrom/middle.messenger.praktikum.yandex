import Http from './index';
import {API_HOST} from '../../utils/constants/API_HOST';

type configType = {
	endpoint: string;
}

export default class BaseApi {
	baseUrl: string;
	endpoint: string;
	http: Http;

	constructor(config: configType) {
		this.baseUrl = API_HOST;
		this.endpoint = config.endpoint;
		this.http = new Http();
	}

	getUrl(name: string) {
		return `${this.baseUrl}/${this.endpoint}/${name}`;
	}
}
