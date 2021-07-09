export default <T>(rules: T) => <T>(form: T): boolean => {
	for (const key in form) {
		if (!rules[key].test(form[key])) {
			return false;
		}
	}

	return true;
};
