/**
 * Check if value is a defined number.
 *
 * See https://stackoverflow.com/a/1303650/7369091
 * and https://stackoverflow.com/a/2910608/7369091
 *
 * @param {*} value
 * @returns {boolean}
 */
export default function isNumber(value) {
  // Make sur the value type is number
  return typeof value === "number"
    // and the value is not NaN.
    && value >= 0;
}
