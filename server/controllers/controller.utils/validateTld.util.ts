/*only allow for .com and .net*/
export function validateTld(tld: string): boolean {
  return tld === 'com' || tld === 'net' ? true : false;
}