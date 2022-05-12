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
m = Number(prompt("uneiste broj zadataka koji je bio za domaci (1,2,3)"));
switch(m){
    case 1:
        // ZADATAK JE DA SE ISPISE TROUGAO NALIK OVOM:
        // 1
        // 12
        // 123
        // 1234
        n = Number(prompt("unesite broj redova"));
        a = "";
        for (i=1;i<=n;i++){
            a += String(i);
            console.log(a);
        }
        break;
    case 2:
        // ZADATAK JE DA SE ISPISE TROUGAO NALIK OVOM:
        // 1
        // 22
        // 333
        // 4444
        n = Number(prompt("unesite broj redova"));
        a = "";
        for (i=1;i<=n;i++){
            for (j=1;j<=i;j++){
                a += String(i);
            }
            console.log(a);
            a = "";
        }
        break;
    case 3:
        // ZADATAK JE DA SE ISPISE TROUGAO NALIK OVOM:
        //          1
        //         2 3
        //        4 5 6
        //       7 8 9 10
        n = Number(prompt("unesite broj redova"));
        a = "";
        k=1;
        for (i=1;i<=n;i++){
            for (j=1;j<=n;j++){
                if (i+j<=n){
                    a += " ";
                }
                else {
                    a += String(k)+" ";
                    k++;
                }
            }
            console.log(a);
            a = "";
        }
}