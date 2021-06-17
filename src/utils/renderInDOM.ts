export const renderInDOM = (element:HTMLElement | null, innerHTML:any): void => {
	if (element) {
		element.innerHTML = innerHTML;
	}
};
