let numbers = [1, 5, -7, 3, -9, 4, -6, 2];
const newArr = numbers.map((item) => {
  if (item < 0)
  return item * -1;
  if(item > 0)
  return item * 2;
});
console.log(newArr);