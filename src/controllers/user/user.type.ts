export type profileEditType = {
	'first_name': string;
	'second_name': string;
	'display_name': string;
	'login': string;
	'email': string;
	'phone': string;
}

export type passwordEditType = {
	oldPassword: string;
	newPassword: string;
}

export type userSearch = {
	login: string;
}
