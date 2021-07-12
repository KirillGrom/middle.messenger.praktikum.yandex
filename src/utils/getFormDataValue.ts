export default (formData: FormData) => {
	const object:Record<string, any> = {};
	formData.forEach((value, key) => {
		object[key] = value;
	});
	return JSON.parse(JSON.stringify(object));
};
