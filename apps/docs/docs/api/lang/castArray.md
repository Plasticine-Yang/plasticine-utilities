# castArray

Casts values as array if it's not none.

## Example

```ts
castArray(1) === [1]
castArray([1]) === [1]
castArray(undefined) === [undefined]
```

## API

```ts
/**
 * @param itemOrArray value or array
 * @returns cast array
 */
function castArray<T>(itemOrArray?: T | undefined | (T | undefined)[]): (T | undefined)[]
```
