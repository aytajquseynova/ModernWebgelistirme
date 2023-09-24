let findThreeLettersWord= ['Green','Red', 'Blue'];
const result = findThreeLettersWord.find((item) => {
  return item.length == 3;
});
console.log(result)