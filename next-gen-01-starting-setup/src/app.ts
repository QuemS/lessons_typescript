// const userName = 'Mixa'
// let age  = 30

// age = 22
// var result 
// function add(a:number,b:number){
  
//   result = a + b
//   return result
// }

// console.log(result);

// const add = (a:number,b:number = 1)=>a + b
// const printOutput:( a:number | string)=> void = output =>console.log(output);

// const button = document.querySelector('button');

// if(button){
//   button.addEventListener('click',event=>console.log(event))
// }



// printOutput(add(2,2));



const person = {
  nameUser:'mixa',
  age:20
}

const activePerson = {...person}

const add = (...numbers:number[])=> {
  return numbers.reduce((prevValue,currentValue)=>prevValue+currentValue,0)
  
}

const addNumer = add(1,2,3,2.5)

console.log(addNumer);

const hobbies = ['Sport','PC','Lessons','Gorps']

const [hobbies1,hobbies2,...other] = hobbies

console.log(hobbies1,hobbies2,other);

const {nameUser :username,age} = person

console.log(username,age);




