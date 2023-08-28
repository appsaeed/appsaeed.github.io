export const unslash = (str: string): string => str.replace(/(\/$)|(^\/)/g, "");
