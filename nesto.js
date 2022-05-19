// + , - , * , / , ++ , -- , ** , % ;
// = , == , != , && , || , += ,-= , *= , /= ;
// number , string , bulean , null , undefined ; 
// console.log("nesto");

    // PRVI DIMACI(ISPISATI KOLIKO IAMS GODINA,DAN,MESECI)

// godine = 1995;
// mesec = 7;
// dan = 4;
// console.log("imam",2022 - godine - 1,"godina");
// console.log("imam",12 + 4 - mesec,"meseci");
// console.log("imam",30 - dan,"dana");

// broj = 10;
// if (true) {
//     console.log("U if bloku");
// }
// console.log("nakon bloka");

    //ISTI ONAJ DOMACI SAMO SA     
// tmp_dan = 2;
// tmp_mesec = 2;
// tmp_godine = 2022;
// godine = 1995;
// mesec = 7;
// dan = 4;
// if (dan <= tmp_dan) {
//     console.log("Imam", tmp_dan - dan ,"dana");
// } else {
//     mesec -= 1;
//     console.log("Imam", tmp_dan + 30 - dan ,"dana");
// }
// if (mesec <= tmp_mesec) {
//     console.log("Imam", tmp_mesec - mesec ,"meseci");
// }else {
//     tmp_godine -= 1;
//     console.log("Imam", tmp_mesec + 12 - mesec ,"meseci");
// }
// console.log("Imam", tmp_godine - godine ,"godina");


// u = Number(prompt("unesite broj zadataka (12,13,14)"));
// switch (u){
//     case 12:
//         a = Number(prompt("unesite stranicu a"));
//         b = Number(prompt("unesite stranicu b"));
//         c = Number(prompt("unesite stranicu c"));
//         if ((a>0 & b>0 &c>0) & (a<b+c & b<a+c & c<a+b)){
//             if(a==b & b==c){
//                 console.log("trougao sa ovim sranicama postoji i jednakostranicnog je tipa");
//             }
//             else if (a**2 + b**2 === c**2 | b**2 + c**2 === a**2 | c**2 + a**2 === b**2){
//                 console.log("trougao sa ovim tranicama postoji i prevouglog je tipa");
//             }
//             else if (a!==b!==c){
//                 console.log("trougao sa ovim stranicama postoji i raznostranicnog je tipa");
//             }

//         }
//         else {
//             console.log("trougao sa voim stranicama ne postoji");
//         }
//         break;
//     case 13:
//         m = Number(prompt("unesite broj ucenika"));
//         n = Number(prompt("unesite svakog kojeg ucenika ucitelj ispituje"));
//         for (let i=n;i<=m;i+=n){
//             console.log("ucitelj ce pitati ucenika pod rednim ntojem",i);
//         }
//         break;
//     case 14:
//         n = Number(prompt("unesite broj ucenika"));
//         visina = [];
//         min = Infinity;
//         max = null;
//         for (i = 0 ; i < n ; i++){
//             v = Number(prompt("unesite visinu ucenika pod rednim brojem",i));
//             visina.push(v);
//             if (visina[i]>max){
//                 max = visina[i];
//             }
//             if (visina[i]<min){
//                 min = visina[i];
//             }
//         }
//         console.log("najveca visina je",max,"cm");
//         console.log("najmanja visina je",min,"cm");
//         break;
// }

// n = Number(prompt("unesite koliko zelite brojeva da unesete"));
// zbir = 0;
// for (i=0;i<n;i++){
//     zbir += Number(prompt("unesite brojeve"));
// }
// console.log("zbir brojeva je:",zbir);
// console.log("aritmeticka sredina je",zbir/n);

// n=Number(prompt("unesite broj")); for (i=1;i<n;i+=2){console.log(i);};
// n = Number(prompt("unesite broj stranice trougla"));
// a= ""
// for (i=0;i<n;i++){
//     a += "*";
//     console.log(a);
// }


// DOMACI 2
// m = Number(prompt("uneiste broj zadataka koji je bio za domaci (1,2,3)"));
// switch(m){
//     case 1:
//         // ZADATAK JE DA SE ISPISE TROUGAO NALIK OVOM:
//         // 1
//         // 12
//         // 123
//         // 1234
//         n = Number(prompt("unesite broj redova"));
//         a = "";
//         for (i=1;i<=n;i++){
//             a += String(i);
//             console.log(a);
//         }
//         break;
//     case 2:
//         // ZADATAK JE DA SE ISPISE TROUGAO NALIK OVOM:
//         // 1
//         // 22
//         // 333
//         // 4444
//         n = Number(prompt("unesite broj redova"));
//         a = "";
//         for (i=1;i<=n;i++){
//             for (j=1;j<=i;j++){
//                 a += String(i);
//             }
//             console.log(a);
//             a = "";
//         }
//         break;
//     case 3:
//         // ZADATAK JE DA SE ISPISE TROUGAO NALIK OVOM:
//         //          1
//         //         2 3
//         //        4 5 6
//         //       7 8 9 10
//         n = Number(prompt("unesite broj redova"));
//         a = "";
//         k=1;
//         for (i=1;i<=n;i++){
//             for (j=1;j<=n;j++){
//                 if (i+j<=n){
//                     a += " ";
//                 }
//                 else {
//                     a += String(k)+" ";
//                     k++;
//                 }
//             }
//             console.log(a);
//             a = "";
//         }
// }


// WHILE PETLJA 


// sifra = 123456;
// unos  = Number(prompt("unesite sifru"));
// while (unos !== sifra){
//     unos = Number(prompt("pogresna sifra pokusaj ponovo"))
// }
// console.log("uneli ste tacnu sifru");

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

// DOMACI 3

// m = Number(prompt("unesite broj zadatka"));
// switch(m){
//     case 1:
//         number = Number(prompt("unesite broj"));
//         sum = 0;
//         while (number>0){
//             sum += number;
//             number = Number(prompt("unesite broj"));
//         }
//         console.log(sum);
//         break;
//     case 2:
//         n = prompt("unesite broj ili END ako ste zavrsili");
//         while (n!="END"){
//             n = prompt("unesite broj ili END ako ste zavrsili");
//         }
//         console.log("I am done.");
//         break;
//     case 3:
//         grade = Number(prompt("unesite ocenu"));
//         sredina = 0;
//         k = 0;
//         while (grade > 0 && grade <= 5){
//             sredina += grade;
//             grade = Number(prompt("unesite ocenu"));
//             k++;
//             if (grade===1){
//                 console.log("F");
//             }
//             else if (grade===2){
//                 console.log("D");
//             }
//             else if (grade===3){
//                 console.log("C");
//             }
//             else if (grade===4){
//                 console.log("B");
//             }
//             else if (grade===5){
//                 console.log("A");
//             }
//             else {
//                 console.log("Unosili ste nemoguce ocene");
//             }
//         }
//         sredina /= k;
//         console.log("srednja ocena je",sredina);
//         break;
// }
// exit = prompt("unesite operaciju ili exit da izadjete");
// while (exit!=="exit" || exit!=="EXIT" || exit!=="0"){
//     a=Number(prompt("unesite prvi broj"))
//     b=Number(prompt("unesite drugi broj"))
//     if (exit === "+"){
//         c = a+b;
//         console.log(c);
//     }
//     exit = prompt("unesite operaciju ili exit da izadjete");
// }


// DOMACI 4
m = 0;
for (i=100;i<1000;i++){
    for (j=100;j<1000;j++){
        sum = String(i*j);
        a = sum.charAt(0);
        b = sum.charAt(1);
        c = sum.charAt(2);
        a1 = sum.charAt(sum.length - 1)
        b1 = sum.charAt(sum.length - 2)
        c1 = sum.charAt(sum.length - 3)
        if (a===a1 && b===b1 && c===c1 && Number(sum)>m){
            m = Number(sum);
            x = i;
            z = j;
        }
    }
}
console.log(m,"dobija se proizvodom",x,"*",z);