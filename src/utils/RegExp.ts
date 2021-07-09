export const REG_EXP_TEXT = /^[a-zA-Zа-яА-я](.[а-яА-яa-zA-Z0-9_-]*)$/i;
export const REG_EXP_PHONE = /^(\+7|7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/;
export const REG_EXP_EMAIL = /^[\w-.]+@([a-z]+\.)+[\w-]{2,4}$/g;
export const REG_EXP_PASSWORD = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
