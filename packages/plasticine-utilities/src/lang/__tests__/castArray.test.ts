import { castArray } from '../castArray'

describe('castArray', () => {
  test('should wrap non-array items in an array', () => {
    const dataList: any[] = [1, 'a', true, { name: 'foo' }, undefined, null]
    const expected = dataList.map((data) => [data])
    const result = dataList.map(castArray)

    expect(result).toEqual(expected)
  })

  test('should return array values by reference', () => {
    const dataList = [1]
    const result = castArray(dataList)
    expect(result).toBe(dataList)
  })

  test('should return an empty array when no arguments are given', () => {
    const result = castArray()
    expect(result).toEqual([])
  })
})
