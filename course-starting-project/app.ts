function add(num1: number, num2: number) {
   return num1 + num2;
}

function printResult(result: number): void {
   console.log('Result ' + result);
}

printResult(add(2, 4));

function addHandler(num1: number, num2: number, cb: (num: number) => void) {
   const result = num1 + num2;

   cb(result);
}

addHandler(2, 5, result => {
   console.log(result);
});
