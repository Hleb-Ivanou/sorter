class Sorter {
  constructor() {
    this.elements = [];
  }

  add(element) {
    this.elements.push(element);
  }

  at(index) {
    return this.elements[index]
  }

  get length() {
    return this.elements.length
  }

  toArray() {
    return this.elements
  }

  sort(indices) {
    var arr = this.elements,
        newArr = [];

    indices.sort( function (a, b) {  return a - b; } );

    var i = 0;
    var k = 1;
    while (k < indices.length + 1) {
      i = indices.slice(k - 1, k);
      newArr.push(arr[i]);
      k++;
    }
    newArr.sort(this.compareNumbers);

    var j = 0;
    while (newArr.length) {
      j = indices.shift();
      arr[j] = newArr.shift();
    }
    this.elements = arr;

    return this.elements
  }

  compareNumbers(a, b) {
    return a - b;
  }

  setComparator(compareFunction) {
    this.compareNumbers = compareFunction;
  }
}

module.exports = Sorter;
