import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  // throw new NotImplementedError('Not implemented');

  if (!date) {
    return "Unable to determine the time of year!"
  }
  if (Object.prototype.toString.call(date) !== "[object Date]" ) {
    throw new Error("Invalid date!")
  }
  if (Object.keys(date).length !== 0) {
    throw new Error("Invalid date!")
  }

  let month = date.getMonth()
  let winter = [0, 1, 11].includes(month);
  let spring = [2, 3, 4].includes(month);
  let summer = [5, 6, 7].includes(month);
  let autumn = [8, 9, 10].includes(month);

  switch (true) {
    case winter:
      return "winter"
    case spring:
      return "spring"
    case summer:
      return "summer"
    case autumn:
      return "autumn"
    default:
      return 'Invalid date!'
  }

}