


// 15. Write a C program to calculate the factorial of a given number.
// Test Data :
// Input the number : 5
// Expected Output :
// The Factorial of 5 is: 120

// n = Number(prompt("unesite bilo koji prirodan broj"));
// faktorial = 1;
// for (i=1;i<=n;i++){
//     faktorial *= i;
// }
// console.log(faktorial);



// 16. Write a program in C to display the n terms of even natural number and their sum.
// Test Data :
// Input number of terms : 5
// Expected Output :
// The even numbers are :2 4 6 8 10
// The Sum of even Natural Number upto 5 terms : 30

// n = Number(prompt("unesite broj"));
// sum = 0;
// for (i=0;i<=n*2;i++){
//     if (i%2===0){
//         sum += i;
//     }
// }
// console.log(sum);



// 17. Write a program in C to make such a pattern like a pyramid with a number which will repeat the number in the same row. Go to the editor
//    1
//   2 2
//  3 3 3
// 4 4 4 4

// n = Number(prompt("unesite broj redova"));
// a = "";
// for (i=1;i<=n;i++){
//     for (j=1;j<=n;j++){
//         if (i+j<=n){
//             a += " ";
//         }
//         else {
//             a += String(i)+" ";
//         }
//     }
//     console.log(a);
//     a = "";
// }


// 19. Write a program in C to display the n terms of harmonic series and their sum. Go to the editor
// 1 + 1/2 + 1/3 + 1/4 + 1/5 ... 1/n terms
// Test Data :
// Input the number of terms : 5
// Expected Output :
// 1/1 + 1/2 + 1/3 + 1/4 + 1/5 +
// Sum of Series upto 5 terms : 2.283334

// n = Number(prompt("unesite broj"));
// sum = 0;
// for (i=1;i<=n;i++){
//     sum += 1/i;
// }
// console.log(sum);


// 20. Write a program in C to display the pattern like a pyramid using asterisk and each row contain an odd number of asterisks. 

// n = Number(prompt("unesite broj redova"));
// a = "";
// for (i=1;i<=n*2;i++){
//     for (j=1;j<=n;j++){
//         if (i+j<=n & i===j){
//             a += " ";
//         }
//         else {
//             a += "*";
//         }
//     }
//     console.log(a);
//     a = "";
// }

// // n = Number(prompt("unesite broj"));
// // k = 0;
// // broj =0;
// // while (k!=n){
// //     if (broj % 2 === 1){
// //         console.log(broj);
// //         k++;
// //     }
// //     broj++;
// // }

// // n = 0;
// // sum = 0;
// // while(n<10){
// //     n++;
// //     sum += n;
// // } 
// // console.log(sum);


// // broj = 0;
// // while (broj<100){
// //     broj++;
// //     if (broj%3 ==0 && broj%5==0){
// //         console.log("fizzbazz");
// //     }
// //     else if (broj % 3 ==0){
// //         console.log("fizz");
// //     }
// //     else if (broj % 5 == 0 ){
// //         console.log("bazz"); 
// //     }
// //     else {
// //         console.log(broj);
// //     }
// // }


// n = Number(prompt("unesite broj redova"));
// broj = 0;
// a="";
// while (broj<n){
//     a+="*";
//     console.log(a);
//     broj++;
// }


// 10 ZADATAK
// niz = [1,2,3,4,5,6,7,8,9,10];
// max = 0;
// min = 0;
// for (i=0;i<niz.length;i++){
//     if(niz[i]>max){
//         max = niz[i];
//     }
// }
// min = max;
// for (i=0;i<niz.length;i++){
//     if (niz[i]<min){
//         min = niz[i];
//     }
// }
// console.log(niz);
// console.log(min);
// console.log(max);


// 17 ZADATAK
// niz = [1,2,3,4,5,6,7,8,9,10];
// max = 0;
// max2 = 0;
// for (i=0;i<niz.length;i++){
//     if(niz[i]>max){
//         max = niz[i];
//     }
// }
// for (i=0;i<niz.length;i++){
//     if (niz[i]>max2 && niz[i]<max){
//         max2 = niz[i];
//     }
// }
// console.log(niz);
// console.log(max2);

// 23 ZADATAK
// a = [1,2,3];
// b = [1,2,3];
// m = false;
// if (a.length === b.length){
//     for (i=0;i<a.length;i++){
//         if (a[i]!==b[i]){
//             console.log("dati nizovi nisu isti");
//             break;
//         }
//         else {
//             m = true;
//         }
//     }
// }
// if (m){
//     console.log("dati nizovi jesu isti");
// }


// 28 ZADATAK
// niz = [1,2,3,4,5];
// max = 0;
// min = 0;
// for (i=0;i<niz.length;i++){
//     if(niz[i]>max){
//         max = niz[i];
//     }
// }
// min = max;
// for (i=0;i<niz.length;i++){
//     if (niz[i]<min){
//         min = niz[i];
//     }
// }
// console.log(max - min);

// DARISOV ZADATAK
// a = [1,2,3,34,5,6,7,8,9]
// zbirParnih = 0;
// zbirNeparnih = 0;
// m = 0;
// n = 0;
// for (i = 0 ;i<a.length;i++){
//     if (a[i]%2===0){
//         zbirParnih += a[i];
//         m++;
//     }
//     else {
//         zbirNeparnih += a[i];
//         n++;
//     }
// }
// console.log("razlika ",zbirParnih-zbirNeparnih);
// console.log("neparnih brojeva ima:",n);
// console.log("parnih brojeva ima",m);

