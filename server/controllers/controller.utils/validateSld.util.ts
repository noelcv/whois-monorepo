/*
DNS names can contain only alphabetical characters (A-Z), numeric characters (0-9), the minus sign (-), and the period (.).
Period characters are allowed only when they are used to delimit the components of domain style name
*/
export function validateSld(sld: string): boolean {
  let regex = new RegExp(/^(?!\.)(?!.*\.$)(?!.*\.\.)[a-zA-Z0-9.]+$/);
  /**
   * ^(?!\.) -- negative look ahead to make sure the first character is not a period
   * (?!.*\.$) -- last character is not a period
   * (?!.*\.\.) -- make sure there are not two periods in a row
   * [a-zA-Z0-9-.]+$ -- only allow letters, numbers, periods, and hyphens
   */

  let isValidInput = regex.test(sld);
  let hasValidLength = sld.length > 0 && sld.length < 64;
  return isValidInput && hasValidLength ? true : false;
}