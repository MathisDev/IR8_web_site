window.onload = function() {
    checksize()
};
function checksize() {
    var largeur = screen.width;
    console.log(largeur);
    if (largeur < 1200) {
        console.log("Vous etes sur telephone");
        resize1()
       
    } else {
        resize2()
        console.log("Vous n'estes pas sur votre telephone")
    }
}
function resize1(){
    let bando = document.getElementById("bando");
    /*let classBtnDevis = document.getElementById("class-btn-devis");
    let btnDevis = document.getElementById("btn-devis");*/
    let a = document.getElementById("bandoli1");
    let a1 = document.getElementById("bando-a1");
    let b = document.getElementById("bandoli2");
    let b2 = document.getElementById("bando-a2");
    let c = document.getElementById("bandoli3");
    let c3 = document.getElementById("bando-a3");
    let d = document.getElementById("bandoli4");
    let d4 = document.getElementById("bando-a4");
    let aa = document.getElementById("contentLogo");
    let dd1 = document.getElementById("b1");
    let dd2= document.getElementById("b2");
    let dd3 = document.getElementById("b3");
    let containerElement = document.getElementById("slide-block");
    a.style.marginLeft = "0px";
    b.style.marginLeft = "0px";
    c.style.marginLeft = "0px";
    d.style.marginLeft = "0px";

    bando.style.height = "230px";


    a1.style.height = "92px";
    a1.style.width = "175px";
    a1.style.backgroundColor = "black";
    a1.style.color = "black"; 

    b2.style.height = "92px";
    b2.style.width = "175px";
    b2.style.backgroundColor = "black";
    b2.style.color = "black";

    c3.style.height = "92px";
    c3.style.width = "175px";
    c3.style.backgroundColor = "black";
    c3.style.color = "black";

    d4.style.height = "92px";
    d4.style.width = "175px";
    d4.style.backgroundColor = "black";
    d4.style.color = "black";
    
    aa.onclick = function() {
        console.log("START FUNCTION 'hover' ")
        a1.style.transition = "1s";
        b2.style.transition = "1s";
        c3.style.transition = "1s";
        d4.style.transition = "1s";
        aa.style.transition = "1s";
        dd1.style.transition = "1s";
        dd1.style.transition = "1s";
        dd1.style.transition = "1s";
        bando.style.transition = "1s";
        
        bando.style.backgroundColor ="#B0ACAC";
        a1.style.backgroundColor = "#B0ACAC";
        b2.style.backgroundColor = "#B0ACAC";
        c3.style.backgroundColor = "#B0ACAC";
        d4.style.backgroundColor = "#B0ACAC";
        aa.style.backgroundColor = "#B0ACAC";
        dd1.style.backgroundColor = "black";
        dd2.style.backgroundColor = "black";
        dd3.style.backgroundColor = "black";
        
        aa.onclick = function() {
            console.log("START FUNCTION 'counterHover' ")
            a1.style.transition = "1s";
            b2.style.transition = "1s";
            c3.style.transition = "1s";
            d4.style.transition = "1s";
            aa.style.transition = "1s";
            dd1.style.transition = "1s";
            dd1.style.transition = "1s";
            dd1.style.transition = "1s";
        
            bando.style.backgroundColor ="black";
            a1.style.backgroundColor = "black";
            b2.style.backgroundColor = "black";
            c3.style.backgroundColor = "black";
            d4.style.backgroundColor = "black";
            aa.style.backgroundColor = "black";
            dd1.style.backgroundColor = "white";
            dd2.style.backgroundColor = "white";
            dd3.style.backgroundColor = "white";
            aa.onclick = function() {
                console.log("START FUNCTION 're-hover' ")
                a1.style.transition = "1s";
                b2.style.transition = "1s";
                c3.style.transition = "1s";
                d4.style.transition = "1s";
                aa.style.transition = "1s";
                dd1.style.transition = "1s";
                dd1.style.transition = "1s";
                dd1.style.transition = "1s";
                
                bando.style.backgroundColor ="#B0ACAC";
                a1.style.backgroundColor = "#B0ACAC";
                b2.style.backgroundColor = "#B0ACAC";
                c3.style.backgroundColor = "#B0ACAC";
                d4.style.backgroundColor = "#B0ACAC";
                aa.style.backgroundColor = "#B0ACAC";
                dd1.style.backgroundColor = "black";
                dd2.style.backgroundColor = "black";
                dd3.style.backgroundColor = "black";
            }
        } 
    }


}
function resize2() {
    console.log("Vous etes sur un ecran pc / extern")

}



function quart1() {
    let a = document.getElementById("quart1");
    let aa = document.getElementById("textQ1");
    let aaa = document.getElementById('titreQ1');

    let b = document.getElementById("quart2");
    let bb = document.getElementById("textQ2");
    let bbb = document.getElementById("titreQ2");

    let c = document.getElementById("quart3");
    let cc = document.getElementById("textQ3");
    let ccc = document.getElementById("titreQ3");


    a.style.width = '70%';
    aa.style.color = "white";
    aaa.style.color = "black";
    aa.style.fontSize = "25px";
    aaa.style.top = "500px";

    b.style.width = "13.33%";
    bb.style.color = "white";
    bbb.style.color = "black";
    bb.style.fontSize = "3px";
    bbb.style.top = "350px";
    bbb.style.right = "100px";

    c.style.width = "13.33%";
    cc.style.color = "black";
    ccc.style.color = "white";
    cc.style.fontSize = "3px";
    ccc.style.top = "300px";



    a.style.transitionDuration = "2s";
    aa.style.transitionDuration = "1.5s";
    aaa.style.transitionDuration = "1s";

    b.style.transitionDuration = "2s";
    bb.style.transitionDuration = "0s";
    bbb.style.transitionDuration = "4.2s";

    c.style.transitionDuration = "2s";



}
function quart2() {
    let a = document.getElementById("quart1");
    let aa = document.getElementById("textQ1");
    let aaa = document.getElementById('titreQ1');

    let b = document.getElementById("quart2");
    let bb = document.getElementById("textQ2");
    let bbb = document.getElementById("titreQ2");


    let c = document.getElementById("quart3");
    let cc = document.getElementById("textQ3");
    let ccc = document.getElementById("titreQ3");


    a.style.width = "13.33%";
    aa.style.color = "black";
    aaa.style.color = "white";
    aa.style.fontSize = "0px";
    aaa.style.top = "300px";

    b.style.width = "70%";
    bb.style.color = "black";
    bbb.style.color = "white";
    bb.style.fontSize = "25px";
    bbb.style.top = "600px";

    c.style.width = "13.33%";
    cc.style.color = "black";
    ccc.style.color = "white";
    cc.style.fontSize = "0px";
    ccc.style.top = "300px";




    a.style.transitionDuration = "2s";
    aa.style.transitionDuration = "0s";
    aaa.style.transitionDuration = "4.2s";

    b.style.transitionDuration = "2s";
    bb.style.transitionDuration = "1.5s";
    bbb.style.transitionDuration = "1s";


    c.style.transitionDuration = "2s";
    cc.style.transitionDuration = "0s";
    ccc.style.transitionDuration = "4.2s";



}
function quart3() {
    let a = document.getElementById("quart1");
    let aa = document.getElementById("textQ1");
    let aaa = document.getElementById('titreQ1');

    let b = document.getElementById("quart2");
    let bb = document.getElementById("textQ2");
    let bbb = document.getElementById("titreQ2");

    let c = document.getElementById("quart3");
    let cc = document.getElementById("textQ3");
    let ccc = document.getElementById("titreQ3");




    a.style.width = "13.33%";
    aa.style.color = "black";
    aaa.style.color = "white";
    aa.style.fontSize = "3px";
    aaa.style.top = "300px";

    b.style.width = "13.33%";
    bb.style.color = "white";
    bbb.style.color = "black";
    bb.style.fontSize = "3px";
    bbb.style.top = "350px";
    bbb.style.right = "100px";

    c.style.width = "70%";
    cc.style.color="white";
    cc.style.fontSize = "25px";
    ccc.style.color = "black";
    ccc.style.top = "500px";



    a.style.transitionDuration = "3s";
    aa.style.transitionDuration = "0s";
    aaa.style.transitionDuration = "0s";

    b.style.transitionDuration = "3s";
    bb.style.transitionDuration = "0s";
    bbb.style.transitionDuration = "4.2s";

    c.style.transitionDuration = "2s";
    cc.style.transitionDuration = "2s";
    ccc.style.transitionDuration = "1s";

}
