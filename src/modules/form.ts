export default class Form {
	public submit(targetElement:HTMLFormElement):void {
		let isValid = false;
		if (!targetElement.elements) {
			return;
		}

		const acc: Record<string, string> = {};
		const resultObject = Array.from(targetElement.elements).reduce((acc, item:HTMLFormElement) => {
			const attributeName:string | null = item.getAttribute('name');
			if (attributeName) {
				acc[attributeName] = item.value;
				isValid = this.checkInputValidated(item);
				this.toggleErrorClass(item, isValid);
			}

			return acc;
		}, acc);
		if (!isValid) {
			return;
		}

		console.log(resultObject);
	}

	public changeInputFile(input:HTMLFormElement):void {
		const filesLength = input.files.length;
		const _parent = input.parentNode;
		if (_parent) {
			const _label: HTMLElement | null = _parent.querySelector('.input-upload-file__label');
			const _name = _parent.querySelector('.input-upload-file__name');
			if (_name && _label) {
				if (filesLength > 0) {
					const fileName = input.files[0].name;
					_label.hidden = true;
					_name.textContent = fileName;
				} else {
					_label.hidden = false;
					_name.textContent = '';
				}
			}

			console.log(input);
		}
	}

	private checkInputValidated(input:HTMLFormElement):boolean {
		const validMapper:Record<string, RegExp> = {
			text: /^[a-zA-Zа-яА-я](.[а-яА-яa-zA-Z0-9_-]*)$/i,
			tel: /^(\+7|7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/,
			email: /^[\w-.]+@([a-z]+\.)+[\w-]{2,4}$/g,
			password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
		};

		const _type = input.getAttribute('type');
		const _value = input.value;

		if (_type && _value) {
			if (_type === 'password' && input.getAttribute('name') === 'password_confirm') {
				return new RegExp(validMapper[_type]).test(_value) && _value === (document.querySelector('input[name=password]') as HTMLFormElement).value;
			}

			return new RegExp(validMapper[_type]).test(_value);
		}

		return false;
	}

	private toggleErrorClass(input:HTMLElement, flag:boolean):void {
		if (flag) {
			const _parent = input.parentNode;
			if (_parent) {
				(_parent as HTMLElement).classList.remove('error');
			}
		} else {
			const _parent = (input as HTMLFormElement).parentNode;
			if (_parent) {
				(_parent as HTMLElement).classList.add('error');
			}
		}
	}

	public inputEventHandler(event:Event):void {
		event.preventDefault();
		if (this.checkInputValidated((event.target as HTMLFormElement))) {
			this.toggleErrorClass(event.target as HTMLFormElement, true);
		} else {
			this.toggleErrorClass(event.target as HTMLFormElement, false);
		}
	}
}
