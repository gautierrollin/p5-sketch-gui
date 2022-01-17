/**
 * @param {Object} classNamesMap
 * @param {string?} classNamesString
 * @returns {string}
 */
export default function getClassNames(classNamesMap, classNamesString) {
  const classNames = Object.entries(classNamesMap).reduce((accu, [className, isEnabled]) => (
    isEnabled
      ? `${accu}${accu !== "" ? " " : ""}${className}`
      : accu
  ), "");

  return classNamesString ? `${classNames} ${classNamesString}` : classNames;
}
