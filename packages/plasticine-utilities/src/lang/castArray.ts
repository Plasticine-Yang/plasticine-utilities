export function castArray<T>(itemOrArray?: T | T[]): T[] {
  if (itemOrArray === undefined) {
    return []
  }

  if (Array.isArray(itemOrArray)) {
    return itemOrArray
  } else {
    return [itemOrArray]
  }
}
