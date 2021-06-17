export default function ():string {
	const REGEX_TAG_NAME = /<v-(.*?)\/>/g;
	return this.template.replace(REGEX_TAG_NAME, (tag:string):string => {
		const tagResult = tag.match(/<v-(.*?)\/>/);
		const tagName = tagResult ? tagResult[1] : '';
		const component = this.components[tagName];
		if (component) {
			if (Array.isArray(component)) {
				return component.map(item => item.render()).join('');
			}

			return component.render();
		}

		throw new Error(`Нет такого компанента ${tagName}`);
	});
}
