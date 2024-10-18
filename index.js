console.log("hello")

// quetion no. 1

// let m = 1;

// switch (true) {
//     case (m <=10):
//         console.log("E")

//         break;
//     case (m <=20):
//         console.log("D")
//         break;
//     case (m <=30):
//         console.log("C")
//         break;
//     case (m <=40):
//         console.log("B")
//         break;
//     case (m <=50):
//         console.log("A")
//         break;

//     default:
//         console.log("invalid")
//         break;
// }


// Que no. 2


// let C = 'p';  

// switch (C) {
//     case 'P'&&'p':
    
//         console.log('PrepBytes');
//         break;
//     case 'Z'&&'z':
   
//         console.log('Zenith');
//         break;
//     case 'E'&&'e':
    
//         console.log('Expert Coder');
//         break;
//     case 'D'&&'d':
   
//         console.log('Data Structure');
//         break;
//     default:
//         console.log('Invalid character');
// }

// question no. 3


// let A = 2;  
// let B = 5;
// let C = 4;

// if (A === B && B === C) {
//     console.log("1-1");
// } else {
//     console.log(Math.max(A, B, C));
// }


// question no. 4

// let X = 2; 
// let Y = 9;
// let Z = 23;

// if ((X > Y && X < Z) || (X > Z && X < Y)) {
//     console.log(X);
// } else if ((Y > X && Y < Z) || (Y > Z && Y < X)) {
//     console.log(Y);
// } else {
//     console.log(Z)}

// question no. 5


let A = 60; 
let B = 100;
let C = 25;

if (A + B + C === 180) {  

    if (A < 90 && B < 90 && C < 90) {

        console.log('acute');

    } else if (A > 90 || B > 90 || C > 90) {

        console.log('obtuse');
    } 
} else {
    console.log('Invalid triangle');
}
