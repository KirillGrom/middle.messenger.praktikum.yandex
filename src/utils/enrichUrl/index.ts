import {API_HOST} from '../constants/API_HOST';

export default (path: string): string => `${API_HOST}${path}`;
