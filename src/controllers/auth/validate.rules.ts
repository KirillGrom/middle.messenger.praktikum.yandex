import {REG_EXP_EMAIL, REG_EXP_PASSWORD, REG_EXP_PHONE, REG_EXP_TEXT} from '../../utils/RegExp';

export const singUpRules = {
	email: REG_EXP_EMAIL,
	first_name: REG_EXP_TEXT,
	login: REG_EXP_TEXT,
	password: REG_EXP_PASSWORD,
	password_confirm: REG_EXP_PASSWORD,
	phone: REG_EXP_PHONE,
	second_name: REG_EXP_TEXT,
};

export const singInRules = {
	login: REG_EXP_TEXT,
	password: REG_EXP_PASSWORD,
};
