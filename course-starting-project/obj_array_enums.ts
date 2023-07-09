// const person: {
//    name: string;
//    age: number;
//    hobbies: string[];
//    role: [number, string];
// } = {
//    name: 'Mikhail',
//    age: 26,
//    hobbies: ['Sport', 'Coking'],
//    role: [2, 'User'],
// };

enum Role {
   ADMIN,
   READ_ONLY,
   AUTHOR,
}

const person = {
   name: 'Mikhail',
   age: 26,
   hobbies: ['Sport', 'Coking'],
   role: Role.ADMIN,
};

let favorive: string[];

favorive = ['Sport'];

for (const hobbi of person.hobbies) {
   console.log(hobbi.toUpperCase());
}

if (person.role === Role.ADMIN) {
   console.log('is admin');
}

// person.role[1] = 2;
