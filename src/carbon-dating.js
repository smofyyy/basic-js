import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
  // throw new NotImplementedError('Not implemented');
  if (typeof sampleActivity === "string") {
    let b = parseFloat(sampleActivity)
    if ((isNaN(b)) || (b > 15) || (b < 0) || (b === 0)){
      return false
    } else {
      return Math.ceil(Math.log(MODERN_ACTIVITY / b) / (0.693 / HALF_LIFE_PERIOD))
    }
  } else {
    return false
  }
}
