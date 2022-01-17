/**
 * @param {string} name
 * @returns {string}
 */
export default function getCookie(name) {
  return document.cookie.split(";").reduce((accu, cookie) => ({
    ...accu,
    [name] : cookie.split("=")[1]
  }), {})[name];
}
