export type HeaderButtonsType = {
	buttonText: string;
	addButton?: boolean;
	deleteButton?: boolean;
	deleteChat?: boolean;
	events?: Record<string, Function>;
}
