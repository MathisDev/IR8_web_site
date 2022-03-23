// Varriable
let i = 0 ;
let c = 1 ;
let m = 0 ;


function check(c,i) {
    m = i - c ;
    m = m * 100 ;
    console.log(m)
    c = i;
    console.log(c);
}


function click1() {
    i = 1;
    check(c,i);
}

function click2() {
    i = 2;
    check(c,i);
}

function click3() {
    i = 3;
    check(c,i);
}

function click4() {
    i = 4;
    check(c,i);
}