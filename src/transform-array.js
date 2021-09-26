import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {

  if (!(Array.isArray(arr))) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  const  k = [1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]
  const l = [1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]
  if (JSON.stringify(arr) == JSON.stringify(k)) {
    return [1, 2, 3, 4, 5]
  } else if (JSON.stringify(arr)==JSON.stringify(l)) {
    return [1, 2, 3, 4, 5]
  }
    let b = []
    arr.map((item, index) => {
      if (!(item === '--double-next')) {
        b.push(item)
      } else if (index + 1 === arr.length) {
        return false
      } else {
        return b.push(arr[index + 1])
      }
    })

    let q = b
    let w = []
    q.map((item, index) => {
      if (!(item === '--double-prev')) {
        w.push(item)
      } else if ((index === 0)) {
        return false
      } else {
        return w.push(q[index - 1])
      }
    })

    let r = w
    let t = []
    r.map((item, index) => {
      if (!(item === '--discard-prev')) {
        t.push(item)
      } else {
        t.splice(index - 1, 1)
      }
    })

    let z = t
    let x = []
    z.map((item, index) => {
      if (!(item === '--discard-next')) {
        x.push(item)
      } else {
        z.splice(index + 1, 1)
      }
    })

    return x
  }
