/**
 * Casts values as array if it's not none.
 * @param itemOrArray value or array
 * @returns cast array
 *
 * @example
 * castArray(1) === [1]
 * castArray([1]) === [1]
 * castArray(undefined) === [undefined]
 */
export function castArray<T>(itemOrArray?: T | undefined | (T | undefined)[]): (T | undefined)[] {
  if (arguments.length === 0) {
    return []
  }

  if (Array.isArray(itemOrArray)) {
    return itemOrArray
  } else {
    return [itemOrArray]
  }
}
