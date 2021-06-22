 enum METHODS {
	GET = 'GET',
	POST = 'POST',
	PUT = 'PUT',
	PATCH = 'PATCH',
	DELETE ='DELETE',
}

type optionsType = {
	timeout: number;
	method: METHODS;
	headers: Record<string, string>;
	data: any;
}

function queryStringify(data:string):string {
	if (!data) {
		return '';
	}

	const queryArr = Object.entries(data);
	return queryArr.reduce((acc:string, [key, value], index:number) => `${acc}${key}=${value}${index < queryArr.length - 1 ? '&' : ''}`, '?');
}

export default class {
	get = (url:string, options:optionsType) => this.request(`${url}${queryStringify(options.data)}`, {...options, method: METHODS.GET}, options.timeout);

	post = (url:string, options:optionsType) => this.request(url, {...options, method: METHODS.POST}, options.timeout);

	put = (url:string, options:optionsType) => this.request(url, {...options, method: METHODS.PUT}, options.timeout);

	patch = (url:string, options:optionsType) => this.request(url, {...options, method: METHODS.PATCH}, options.timeout);

	delete = (url:string, options:optionsType) => this.request(url, {...options, method: METHODS.DELETE}, options.timeout);

	request = (url:string, options:any, timeout = 5000) => {
		const {method, headers = {}, data} = options;
		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();

			xhr.open(method, url);
			Object.entries(headers).forEach(([key, value]) => {
				if (typeof value === 'string') {
					xhr.setRequestHeader(key, value);
				}
			});
			xhr.onload = function () {
				resolve(xhr);
			};

			xhr.onabort = reject;
			xhr.onerror = reject;
			xhr.timeout = timeout;
			xhr.ontimeout = reject;
			if (method === METHODS.GET) {
				xhr.send();
			} else {
				xhr.send(JSON.stringify(data));
			}
		});
	};
}
