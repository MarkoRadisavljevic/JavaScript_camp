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
// m = 0;
// for (i=100;i<1000;i++){
//     for (j=100;j<1000;j++){
//         sum = String(i*j);
//         a = sum.charAt(0);
//         b = sum.charAt(1);
//         c = sum.charAt(2);
//         a1 = sum.charAt(sum.length - 1)
//         b1 = sum.charAt(sum.length - 2)
//         c1 = sum.charAt(sum.length - 3)
//         if (a===a1 && b===b1 && c===c1 && Number(sum)>m){
//             m = Number(sum);
//             x = i;
//             z = j;
//         }
//     }
// }
// console.log(m,"dobija se proizvodom",x,"*",z);

// niz = [1,2,3,4,4,56,3,23];
// v = Number(prompt("unesi broj"))
// for (i = 0;i<niz.length-1;i++){
//     if (v===niz[i]){
//         console.log("postoji");
//     }
//     else {
//         m = true;
//     }
// }
// if (m === true){
//     console.log("ne postoji");
// }
// niz = [1,2,3,4,5,6,7,8,9,10];
// niz1 = [];
// v=Number(prompt("unesite broj"));
// for (i = 0;i<niz.length;i++){
//     if (niz[i]===v){
//         niz.splice(i);
//     }
// }
// console.log(niz);

// broj = Number(prompt("unesite broj zadataka"))
// switch(broj){
//     case 10:
//         // 10 ZADATAK
//         niz = [1,2,3,4,5,6,7,8,9,10];
//         max = 0;
//         min = 0;
//         for (i=0;i<niz.length;i++){
//             if(niz[i]>max){
//                 max = niz[i];
//             }
//         }
//         min = max;
//         for (i=0;i<niz.length;i++){
//             if (niz[i]<min){
//                 min = niz[i];
//             }
//         }
//         console.log(niz);
//         console.log(min);
//         console.log(max);
//         break;
//     case 17:
//         // 17 ZADATAK
//         niz = [1,2,3,4,5,6,7,8,9,10];
//         max = 0;
//         max2 = 0;
//         for (i=0;i<niz.length;i++){
//             if(niz[i]>max){
//                 max = niz[i];
//             }
//         }
//         for (i=0;i<niz.length;i++){
//             if (niz[i]>max2 && niz[i]<max){
//                 max2 = niz[i];
//             }
//         }
//         console.log(niz);
//         console.log(max2);
//         break;
//     case 23:
//         // 23 ZADATAK
//         a = [1,2,3];
//         b = [1,2,3];
//         m = false;
//         if (a.length === b.length){
//             for (i=0;i<a.length;i++){
//                 if (a[i]!==b[i]){
//                     console.log("dati nizovi nisu isti");
//                     break;
//                 }
//                 else {
//                     m = true;
//                 }
//             }
//         }
//         if (m){
//             console.log("dati nizovi jesu isti");
//         }
//     case 28:
//         // 28 ZADATAK
//         niz = [1,2,3,4,5];
//         max = 0;
//         min = 0;
//         for (i=0;i<niz.length;i++){
//             if(niz[i]>max){
//                 max = niz[i];
//             }
//         }
//         min = max;
//         for (i=0;i<niz.length;i++){
//             if (niz[i]<min){
//                 min = niz[i];
//             }
//         }
//         console.log(max - min);
//         break;
//     case 1:
//         // DARISOV ZADATAK
//         a = [1,2,3,34,5,6,7,8,9]
//         zbirParnih = 0;
//         zbirNeparnih = 0;
//         m = 0;
//         n = 0;
//         for (i = 0 ;i<a.length;i++){
//             if (a[i]%2===0){
//                 zbirParnih += a[i];
//                 m++;
//             }
//             else {
//                 zbirNeparnih += a[i];
//                 n++;
//             }
//         }
//         console.log("razlika ",zbirParnih-zbirNeparnih);
//         console.log("neparnih brojeva ima:",n);
//         console.log("parnih brojeva ima",m);
//         break;
// }
// niz = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ];
// sum = 0;
// a = "";
// b ="";
// for (i = 0;i<niz.length;i++){
//     for (j = 0;j<niz.length;j++){
//         sum += niz[j][i];
//     }
//     a +=sum+" ";
//     sum = 0;
// }
// for (i = 0;i<niz.length;i++){
//     for (j = 0;j<niz.length;j++){
//         b += niz[i][j] + "  ";
//     }
//     console.log(b);
//     b = "";
// }
// console.log(a);
// console.log("---------------------------------------------------------------");

// a = "";
// for (i = 0;i<niz.length;i++){
//     for (j = 0;j<niz.length;j++){
//         if (i===j){
//             a += niz[i][j] + " ";
//         }
//         else 
//         {
//             a += "  ";
//         }
//     }
//     console.log(a);
//     a = "";
// }
// console.log("---------------------------------------------------------------");
// a = "";
// for (i = 0;i<niz.length;i++){
//     for (j = 0;j<niz.length;j++){
//         if (i+j===niz.length-1){
//             a += niz[i][j] + " ";
//         }
//         else 
//         {
//             a += "  ";
//         }
//     }
//     console.log(a);
//     a = "";
// }
// console.log(+!![] + +!![]);


// niz = [1,2,3,4,5,6,7,8,9,10];
// niz2  =  niz.map((x) => x*2);
// console.log(niz);
// console.log(niz2);
// niz.filter((x) => x%2===0);
// niz.array.forEach(element => { });
// niz.sum
// niz.every
// niz.reduce
// niz.map
// niz.filter
// niz.sort
// niz.forEach

// nums = [-2,1,-3,4,-1,2,1,-5,4];
// maxSuma = Infinity;
// trnutna = 0;
// for (i = 0;i<nums.length;i++){
//     trnutna = Math.max(nums[i],trnutna + nums[i]);
//     maxSuma = Math.max(maxSuma,trnutna);
// }
// console.log(maxSuma);

// strs = ["flower","flow","flight"];
// prefix = strs[0];
// for (i=0;i<strs.length;i++){
//     p = "";
//     for (j=0;j<strs[i].length;j++){
//         if (prefix[j]!==strs[i][j]){
//             break;
//         }
//         p += prefix[j];
//     }
//     prefix = p;
// }
// console.log(prefix);


// trinaest uzastopnih cifara

// niz = [
//     [7,3,1,6,7,1,7,6,5,3,1,3,3,0,6,2,4,9,1,9,2,2,5,1,1,9,6,7,4,4,2,6,5,7,4,7,4,2,3,5,5,3,4,9,1,9,4,9,3,4],
//     [9,6,9,8,3,5,2,0,3,1,2,7,7,4,5,0,6,3,2,6,2,3,9,5,7,8,3,1,8,0,1,6,9,8,4,8,0,1,8,6,9,4,7,8,8,5,1,8,4,3],
//     [8,5,8,6,1,5,6,0,7,8,9,1,1,2,9,4,9,4,9,5,4,5,9,5,0,1,7,3,7,9,5,8,3,3,1,9,5,2,8,5,3,2,0,8,8,0,5,5,1,1],
//     [1,2,5,4,0,6,9,8,7,4,7,1,5,8,5,2,3,8,6,3,0,5,0,7,1,5,6,9,3,2,9,0,9,6,3,2,9,5,2,2,7,4,4,3,0,4,3,5,5,7],
//     [6,6,8,9,6,6,4,8,9,5,0,4,4,5,2,4,4,5,2,3,1,6,1,7,3,1,8,5,6,4,0,3,0,9,8,7,1,1,1,2,1,7,2,2,3,8,3,1,1,3],
//     [6,2,2,2,9,8,9,3,4,2,3,3,8,0,3,0,8,1,3,5,3,3,6,2,7,6,6,1,4,2,8,2,8,0,6,4,4,4,4,8,6,6,4,5,2,3,8,7,4,9],
//     [3,0,3,5,8,9,0,7,2,9,6,2,9,0,4,9,1,5,6,0,4,4,0,7,7,2,3,9,0,7,1,3,8,1,0,5,1,5,8,5,9,3,0,7,9,6,0,8,6,6],
//     [7,0,1,7,2,4,2,7,1,2,1,8,8,3,9,9,8,7,9,7,9,0,8,7,9,2,2,7,4,9,2,1,9,0,1,6,9,9,7,2,0,8,8,8,0,9,3,7,7,6],
//     [6,5,7,2,7,3,3,3,0,0,1,0,5,3,3,6,7,8,8,1,2,2,0,2,3,5,4,2,1,8,0,9,7,5,1,2,5,4,5,4,0,5,9,4,7,5,2,2,4,3],
//     [5,2,5,8,4,9,0,7,7,1,1,6,7,0,5,5,6,0,1,3,6,0,4,8,3,9,5,8,6,4,4,6,7,0,6,3,2,4,4,1,5,7,2,2,1,5,5,3,9,7],
//     [5,3,6,9,7,8,1,7,9,7,7,8,4,6,1,7,4,0,6,4,9,5,5,1,4,9,2,9,0,8,6,2,5,6,9,3,2,1,9,7,8,4,6,8,6,2,2,4,8,2],
//     [8,3,9,7,2,2,4,1,3,7,5,6,5,7,0,5,6,0,5,7,4,9,0,2,6,1,4,0,7,9,7,2,9,6,8,6,5,2,4,1,4,5,3,5,1,0,0,4,7,4],
//     [8,2,1,6,6,3,7,0,4,8,4,4,0,3,1,9,9,8,9,0,0,0,8,8,9,5,2,4,3,4,5,0,6,5,8,5,4,1,2,2,7,5,8,8,6,6,6,8,8,1],
//     [1,6,4,2,7,1,7,1,4,7,9,9,2,4,4,4,2,9,2,8,2,3,0,8,6,3,4,6,5,6,7,4,8,1,3,9,1,9,1,2,3,1,6,2,8,2,4,5,8,6],
//     [1,7,8,6,6,4,5,8,3,5,9,1,2,4,5,6,6,5,2,9,4,7,6,5,4,5,6,8,2,8,4,8,9,1,2,8,8,3,1,4,2,6,0,7,6,9,0,0,4,2],
//     [2,4,2,1,9,0,2,2,6,7,1,0,5,5,6,2,6,3,2,1,1,1,1,1,0,9,3,7,0,5,4,4,2,1,7,5,0,6,9,4,1,6,5,8,9,6,0,4,0,8],
//     [0,7,1,9,8,4,0,3,8,5,0,9,6,2,4,5,5,4,4,4,3,6,2,9,8,1,2,3,0,9,8,7,8,7,9,9,2,7,2,4,4,2,8,4,9,0,9,1,8,8],
//     [8,4,5,8,0,1,5,6,1,6,6,0,9,7,9,1,9,1,3,3,8,7,5,4,9,9,2,0,0,5,2,4,0,6,3,6,8,9,9,1,2,5,6,0,7,1,7,6,0,6],
//     [0,5,8,8,6,1,1,6,4,6,7,1,0,9,4,0,5,0,7,7,5,4,1,0,0,2,2,5,6,9,8,3,1,5,5,2,0,0,0,5,5,9,3,5,7,2,9,7,2,5],
//     [7,1,6,3,6,2,6,9,5,6,1,8,8,2,6,7,0,4,2,8,2,5,2,4,8,3,6,0,0,8,2,3,2,5,7,5,3,0,4,2,0,7,5,2,9,6,3,4,5,0],
// ];
// product = 1;
// maxProduct = 0;
// for (i=0;i<niz.length;i++){
//     for(j=0;j<niz[i].length;j++){
//         k = 0;
//         for (z=0;z<14;z++){
//             if (i===niz.length-1){
//                 if (j+z<niz[i].length){
//                     product = product * niz[i][j+z];
//                 }
//                 else{
//                     break;
//                 }
//             }
//             else {
//                 if (j+z<niz[i].length){
//                     product = product * niz[i][j+z];
//                 }
//                 else {
//                     product = product * niz[i+1][k];
//                     k++;
//                 }
//             }
//             if (product > maxProduct){
//                 maxProduct = product;
//             } 
//         }
        
//     }
    
// }

// console.log(maxProduct);
// product = 1;
// maxProduct = 0;
// niz = [7,3,1,6,7,1,7,6,5,3,1,3,3,0,6,2,4,9,1,9,2,2,5,1,1,9,6,7,4,4,2,6,5,7,4,7,4,2,3,5,5,3,4,9,1,9,4,9,3,4,9,6,9,8,3,5,2,0,3,1,2,7,7,4,5,0,6,3,2,6,2,3,9,5,7,8,3,1,8,0,1,6,9,8,4,8,0,1,8,6,9,4,7,8,8,5,1,8,4,3,8,5,8,6,1,5,6,0,7,8,9,1,1,2,9,4,9,4,9,5,4,5,9,5,0,1,7,3,7,9,5,8,3,3,1,9,5,2,8,5,3,2,0,8,8,0,5,5,1,1,1,2,5,4,0,6,9,8,7,4,7,1,5,8,5,2,3,8,6,3,0,5,0,7,1,5,6,9,3,2,9,0,9,6,3,2,9,5,2,2,7,4,4,3,0,4,3,5,5,7,6,6,8,9,6,6,4,8,9,5,0,4,4,5,2,4,4,5,2,3,1,6,1,7,3,1,8,5,6,4,0,3,0,9,8,7,1,1,1,2,1,7,2,2,3,8,3,1,1,3,6,2,2,2,9,8,9,3,4,2,3,3,8,0,3,0,8,1,3,5,3,3,6,2,7,6,6,1,4,2,8,2,8,0,6,4,4,4,4,8,6,6,4,5,2,3,8,7,4,9,3,0,3,5,8,9,0,7,2,9,6,2,9,0,4,9,1,5,6,0,4,4,0,7,7,2,3,9,0,7,1,3,8,1,0,5,1,5,8,5,9,3,0,7,9,6,0,8,6,6,7,0,1,7,2,4,2,7,1,2,1,8,8,3,9,9,8,7,9,7,9,0,8,7,9,2,2,7,4,9,2,1,9,0,1,6,9,9,7,2,0,8,8,8,0,9,3,7,7,6,6,5,7,2,7,3,3,3,0,0,1,0,5,3,3,6,7,8,8,1,2,2,0,2,3,5,4,2,1,8,0,9,7,5,1,2,5,4,5,4,0,5,9,4,7,5,2,2,4,3,5,2,5,8,4,9,0,7,7,1,1,6,7,0,5,5,6,0,1,3,6,0,4,8,3,9,5,8,6,4,4,6,7,0,6,3,2,4,4,1,5,7,2,2,1,5,5,3,9,7,5,3,6,9,7,8,1,7,9,7,7,8,4,6,1,7,4,0,6,4,9,5,5,1,4,9,2,9,0,8,6,2,5,6,9,3,2,1,9,7,8,4,6,8,6,2,2,4,8,2,8,3,9,7,2,2,4,1,3,7,5,6,5,7,0,5,6,0,5,7,4,9,0,2,6,1,4,0,7,9,7,2,9,6,8,6,5,2,4,1,4,5,3,5,1,0,0,4,7,4,8,2,1,6,6,3,7,0,4,8,4,4,0,3,1,9,9,8,9,0,0,0,8,8,9,5,2,4,3,4,5,0,6,5,8,5,4,1,2,2,7,5,8,8,6,6,6,8,8,1,1,6,4,2,7,1,7,1,4,7,9,9,2,4,4,4,2,9,2,8,2,3,0,8,6,3,4,6,5,6,7,4,8,1,3,9,1,9,1,2,3,1,6,2,8,2,4,5,8,6,1,7,8,6,6,4,5,8,3,5,9,1,2,4,5,6,6,5,2,9,4,7,6,5,4,5,6,8,2,8,4,8,9,1,2,8,8,3,1,4,2,6,0,7,6,9,0,0,4,2,2,4,2,1,9,0,2,2,6,7,1,0,5,5,6,2,6,3,2,1,1,1,1,1,0,9,3,7,0,5,4,4,2,1,7,5,0,6,9,4,1,6,5,8,9,6,0,4,0,8,0,7,1,9,8,4,0,3,8,5,0,9,6,2,4,5,5,4,4,4,3,6,2,9,8,1,2,3,0,9,8,7,8,7,9,9,2,7,2,4,4,2,8,4,9,0,9,1,8,8,8,4,5,8,0,1,5,6,1,6,6,0,9,7,9,1,9,1,3,3,8,7,5,4,9,9,2,0,0,5,2,4,0,6,3,6,8,9,9,1,2,5,6,0,7,1,7,6,0,6,0,5,8,8,6,1,1,6,4,6,7,1,0,9,4,0,5,0,7,7,5,4,1,0,0,2,2,5,6,9,8,3,1,5,5,2,0,0,0,5,5,9,3,5,7,2,9,7,2,5,7,1,6,3,6,2,6,9,5,6,1,8,8,2,6,7,0,4,2,8,2,5,2,4,8,3,6,0,0,8,2,3,2,5,7,5,3,0,4,2,0,7,5,2,9,6,3,4,5,0];
// for (i=0;i<1000-13;i++){
//     product = 1;
//     for (j=0;j<13;j++){
//         product *= niz[i+j];
//     }
//     if (product > maxProduct){
//         maxProduct = product;
//     }
// }
// console.log(maxProduct);

