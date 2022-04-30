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
tmp_dan = 2;
tmp_mesec = 2;
tmp_godine = 2022;
godine = 1995;
mesec = 7;
dan = 4;
if (dan <= tmp_dan) {
    console.log("Imam", tmp_dan - dan ,"dana");
} else {
    mesec -= 1;
    console.log("Imam", tmp_dan + 30 - dan ,"dana");
}
if (mesec <= tmp_mesec) {
    console.log("Imam", tmp_mesec - mesec ,"meseci");
}else {
    tmp_godine -= 1;
    console.log("Imam", tmp_mesec + 12 - mesec ,"meseci");
}
console.log("Imam", tmp_godine - godine ,"godina");
