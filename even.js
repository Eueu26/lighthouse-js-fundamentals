const isEven  = function (num) {
  return num % 2 === 0;
}

const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);
console.log(tenIsEven);
console.log(elevenIsEven);
    
//this can be the shorter version without the vairables (const tenIsEven..) 
console.log(isEven(12));
console.log(isEven(13));