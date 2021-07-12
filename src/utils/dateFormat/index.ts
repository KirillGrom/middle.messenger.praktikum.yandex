export default (str: string) => {
	const dateParse = Date.parse(str);

	if (str === '' || isNaN(dateParse)) {
		return '';
	}

	const date = new Date(dateParse);
	return `${date.getHours()}:${date.getMinutes()}`;
};
