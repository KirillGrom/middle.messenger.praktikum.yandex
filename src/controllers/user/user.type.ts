export type profileEditData = {
	'first_name': string;
	'second_name': string;
	'display_name': string;
	'login': string;
	'email': string;
	'phone': string;
}

export type passwordEditData = {
	oldPassword: string;
	newPassword: string;
}

export type userSearchData = {
	login: string;
}
