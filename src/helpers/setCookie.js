/**
 * @param {string} name
 * @param {string} value
 */
export default function setCookie(name, value) {
  document.cookie = `${name}=${value}`;
}
