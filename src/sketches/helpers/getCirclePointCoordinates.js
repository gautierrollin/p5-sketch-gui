import convertDegreesToRadians from "./convertDegreesToRadians";

/**
 * @param {number} originX
 * @param {number} originY
 * @param {number} radius
 * @param {number} delta Delta in degrees
 * @returns {object}
 */
export default function getCirclePointCoordinates(originX, originY, radius, delta) {
  const deltaInRadians = convertDegreesToRadians(delta);
  return {
    x : originX + radius * Math.sin(deltaInRadians),
    y : originY + radius * Math.cos(deltaInRadians)
  };
}
