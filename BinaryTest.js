// Generated by CodiumAI

describe('binarySearch', () => {

    // Search for an element that exists in the array
    it('should return the index of the element when it exists in the array', () => {
      expect(binarySearch([1,2,3,4,5], 2)).toBe(1);
    });

    // Search for the first element in the array
    it('should return the index of the first element in the array', () => {
      expect(binarySearch([1,2,3,4,5], 1)).toBe(0);
    });

    // Search for the last element in the array
    it('should return the index of the last element in the array', () => {
      expect(binarySearch([1,2,3,4,5], 5)).toBe(4);
    });

    // Search for an element that does not exist in the array
    it('should return -1 when the element does not exist in the array', () => {
      expect(binarySearch([1,2,3,4,5], 6)).toBe(-1);
    });

    // Search for an element in an empty array
    it('should return -1 when searching in an empty array', () => {
      expect(binarySearch([], 1)).toBe(-1);
    });

    // Search for an element in an unsorted array
    it('should throw an error when searching in an unsorted array', () => {
      expect(() => binarySearch([5,4,3,2,1], 2)).toThrowError("Array is not sorted");
    });
});
