export const API_HOST = 'https://ya-praktikum.tech/api/v2/';
export default (path: string): string => `${API_HOST}${path}`;
