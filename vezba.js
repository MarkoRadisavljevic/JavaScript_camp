function nzm(str){
    a = "";
    matrica =  str.split(" ").map((el) => {
        return el.split("");
    })
    for (let i = 0; i < matrica.length; i++) {
        for (let j = 0; j < matrica[i].length; j++) {
            matrica[i][0] = matrica[i][0].toUpperCase();
            a += matrica[i][j];
        }
        a+=" ";
    }
    console.log(a);
}
nzm("df sedf asf")