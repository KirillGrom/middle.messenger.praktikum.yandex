export default <T>(obj: T, path: string) => path.split('.').reduce((obj:Record<string, any>, key) => obj[key], obj);
