// Section 1 //
// 9= a is not valid
// b= b+5

// Section 2 
// const a = 42.78
// const b = 1.1
// const c = -2
// const d = .5
// const e = 16
let nothing = 0
if(nothing == true){
console.log(Math.floor(a))
console.log(Math.ceil(b))
console.log(Math.abs(b-a))
console.log(Math.max(b,c,d,e,a))
console.log(Math.min(a,b,c,d,e))
console.log(Math.sqrt(e))
console.log(Math.pow(e,d))
console.log(Math.floor(Math.random()*100))
}
// Section 3
// let firstVariable ='Hello World';
// firstVariable = 7
// let secondVariable = firstVariable
// secondVariable= 'why do this'
// console.log(secondVariable)

// let yourName = 'Jeffrey Flores'
// console.log(`hello ${yourName}`)

// Section 4

//   const a = 6;
//   const b = 100;
//   const c = -5;
//   const d = 3000;
//   const e = 'Jelly Bean';

// 1.  a < b;
// 1.  c < d;
// 1.  'Peanut' == 'Peanut';
// 1.  a < b > c;
// 1.  a == a < d;
// 1.  e == 'Jelly Bean';
// 1.  48 != '48';
// 1. 'e' != 'Eh'

// Section 5
// let animal = 'pig';
// if (animal == 'cow'){
//     console.log('moooo')
// } else{console.log('not a cow')}

// Section 6 
// let age = 25;
// if (age >=16){
//     console.log('here are the keys')
// }else{console.log('too young for the keys')}

// Section 7
// for (let i =0; i<=10; i++){
//     console.log(i)
// }
// let number =49
// while(number <=499){
//     number++
//     console.log(number)
// }
// Section 8
for (let i=0; i <=100; i++){
// if (i%2==1){
//     console.log(`${i} is an odd number`)
// }
}

// Section 9
// for (let i = 0; i <= 100; i++){
//     if(i%5==0){
//         console.log(`${i} is a fiver`)
//     }
//     if (i%3==0){
//         console.log(`${i} is a threeer`)
//     }
// }

// Section 10
// let bankAccount= 0;
// for (let i =0; i<=10;i++){
//     bankAccount+=i
// }
// console.log(bankAccount)
// let bankAccount= 0;
// for (let i =0; i<=100;i++){
//     bankAccount+=i*2
// }
// console.log(bankAccount)

// Section 11
// for (let i= 0; i <=100; i++){
//     if(i%3==0){
//         console.log('fizz')
//     }else if(i%5==0){
//         console.log('buzz')
//     }else if(i%3==0 && i%5==0){
//         console.log('FizzBuzz')
//     }else{console.log(i)}
// }

// Fibbonacci
// let a = 1
// let b = 2
// let c = 0
// // for (let i = 0; i <= 100; i++){
// //     c = a + b
// //     a = b
// //     b = c
// //     console.log(c)
// // }
// let sum =0
// while(c <= 4000000){
//     c = a + b
//     a = b
//     b = c
//     console.log(c)
//     if(c%2==0){
//         sum+=c
//     }
// }
// console.log(`this is the sum${sum}`)

// Section 13
const boardSize = 20;
for (let row=0; row < boardSize; row++){
    let rowStr = ''
    for (let col=0; col<boardSize; col++){
        if (((row%2)+ col) % 2 ==0){
            rowStr +=' '
        } else{
        rowStr +='#'
    }
}
    console.log(rowStr)
}