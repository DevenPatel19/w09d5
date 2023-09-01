function Quicksort(array) {
    //Base Case
  if (array.length < 2) {
    return array;
  }
  // establish pivot and partitions
  let pivot_element = array[array.length - 1];
  let left_sub_array = [];
  let right_sub_array = [];

  // iterate through array based on pivot and push to appropriate partition
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot_element) {
      left_sub_array.push(array[i]);
    } else {
      right_sub_array.push(array[i]);
    }
  }
  // return all pieces in correct sequence with recursive call to both partitions using spread/rest operator
  return [
    ...Quicksort(left_sub_array),
    pivot_element,
    ...Quicksort(right_sub_array),
  ];
}

//test arrays
const array1 = [0, 10, 4, 1, 3];
const array2 = [5, 7, 8, 4, 6, 1, 2, 3];
const array3 = [0, 5, 6, 7, 4, 1, 2, 3, 99];


console.log(Quicksort(array1));
console.log(Quicksort(array2));
console.log(Quicksort(array3));