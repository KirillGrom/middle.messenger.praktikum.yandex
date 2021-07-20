export default (rules: Record<string, RegExp>) => (form:Record<string, any>): boolean => {
	for (const key in form) {
		if (!rules[key].test(form[key])) {
			return false;
		}
	}

	return true;
};
