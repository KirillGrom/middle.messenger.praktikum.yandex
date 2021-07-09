export default (obj: Object, path: string) => path.split('.').reduce((obj, key) => obj[key], obj);
