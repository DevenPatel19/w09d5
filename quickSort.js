function Quicksort(array) {
  if (array.length < 2) {
    return array;
  }
  let pivot_element = array[array.length - 1];
  let left_sub_array = [];
  let right_sub_array = [];

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot_element) {
      left_sub_array.push(array[i]);
    } else {
      right_sub_array.push(array[i]);
    }
  }
  return [
    ...Quicksort(left_sub_array),
    pivot_element,
    ...Quicksort(right_sub_array),
  ];
}
const array1 = [0, 10, 4, 1, 3];
const array2 = [5, 7, 8, 4, 6, 1, 2, 3];
const array3 = [0, 5, 6, 7, 4, 1, 2, 3, 99];


console.log(Quicksort(array1));
console.log(Quicksort(array2));
console.log(Quicksort(array3));