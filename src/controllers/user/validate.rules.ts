import {REG_EXP_EMAIL, REG_EXP_PASSWORD, REG_EXP_PHONE, REG_EXP_TEXT} from '../../utils/RegExp';

export const profileEditRules = {
	email: REG_EXP_EMAIL,
	first_name: REG_EXP_TEXT,
	login: REG_EXP_TEXT,
	display_name: REG_EXP_TEXT,
	phone: REG_EXP_PHONE,
	second_name: REG_EXP_TEXT,
};

export const passwordEditRules = {
	oldPassword: REG_EXP_PASSWORD,
	newPassword: REG_EXP_PASSWORD,
};

export const userSearchRules = {
	login: REG_EXP_TEXT,
};
