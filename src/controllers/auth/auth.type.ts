export type signUpType = {
	'first_name': string;
	'second_name': string;
	'login': string;
	'email': string;
	'password': string;
	'phone': string;
}

export type singInType = {
	login: string;
	password: string;
}

export type UserType = {
	id: string;
	'first_name': string;
	'second_name': string;
	'display_name': string;
	login: string;
	email: string;
	phone: string;
	avatar: string;
}

export type TokenResponseType = {
	token: string;
}
