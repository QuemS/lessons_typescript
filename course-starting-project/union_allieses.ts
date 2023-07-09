type Combinable = number | string;
type ConvircionDescriptor = 'as-number' | 'as-text';

function combine(
   input1: Combinable,
   input2: Combinable,
   resultConversion: ConvircionDescriptor,
) {
   let result;
   if (
      (typeof input1 === 'number' && typeof input2 === 'number') ||
      resultConversion === 'as-number'
   ) {
      result = +input1 + +input2;
   } else {
      result = input1.toString() + input2.toString();
   }
   return result;
   // if (resultConversion === 'as-number') {
   //    return +result;
   // } else {
   //    return result.toString();
   // }
}

// const combinesAges = combine(20, 2);
// const combineName = combine('Mixa', 2);

const combinesAgesString = combine(13, 6, 'as-text');
const combinesAgesNumber = combine('20', '2', 'as-number');
console.log(combinesAgesString);
console.log(combinesAgesNumber);
