export const renderInDOM = (element:HTMLElement | null, innerHTML:any): void => {
	if (element) {
		while (element.firstChild) {
			element.firstChild.remove();
		}

		element.appendChild(innerHTML);
	}
};
