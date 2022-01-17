/**
 * Cross browser compatible progress bar styles for input type range.
 *
 * In Firefox, input type range element can be styled with the following CSS pseudo elements:
 * - ::-moz-range-thumb (::-webkit-slider-thumb for Webkit browsers)
 * - ::-moz-range-track (::-webkit-slider-runnable-track for Webkit browsers)
 * - ::-moz-range-progress
 * Since no equivalent of "::-moz-range-progress" exists in Webkit browsers, we have to use JS.
 *
 * See https://stackoverflow.com/questions/65738788/input-range-slider-progress-for-chrome-browser
 *
 * @param {number} percent
 * @returns {Object}
 */
export default function getProgressBarStyles(percent) {
  return {
    background : `
      linear-gradient(
        to right,
        #99AFF2 0%,
        #99AFF2 ${percent}%,
        #C4D4F2 ${percent}%,
        #C4D4F2 100%
      )
    `
  };
}
