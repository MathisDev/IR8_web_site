
window.onload = function() {
    checksize()
    blops(); 
};
function checksize() {
    let i = 0;
    var largeur = screen.width;
    console.log(largeur);
    if (largeur < 800) {
        i = 1;
        console.log("Vous etes sur telephone");
        resize1()
       
    } 
    if (1000 <largeur < 1200) {
        console.log("Vous n'etes sur votre ordinateur portable")
        i = 2;
    }
    else {
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
    
        bando.style.backgroundColor ="#f0ee97";
        a1.style.backgroundColor = "#f0ee97";
        b2.style.backgroundColor = "#f0ee97";
        c3.style.backgroundColor = "#f0ee97";
        d4.style.backgroundColor = "#f0ee97";
        aa.style.backgroundColor = "#f0ee97";
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
                
                bando.style.backgroundColor ="#f0ee97";
                a1.style.backgroundColor = "#f0ee97";
                b2.style.backgroundColor = "#f0ee97";
                c3.style.backgroundColor = "#f0ee97";
                d4.style.backgroundColor = "#f0ee97";
                aa.style.backgroundColor = "#f0ee97";
                dd1.style.backgroundColor = "black";
                dd2.style.backgroundColor = "black";
                dd3.style.backgroundColor = "black";
            }
        } 
    }


}
function resize2() {

}

function blops() {
    let aa = document.getElementById("class-titre-block");
    let a = document.getElementById("a-titre1");
    let b = document.getElementById("content-block1-scroll");
    let bb =document.getElementById('titre-block1');
    let c = document.getElementById('scroll-d');
    aa.style.transitionDuration = '3s';
    a.style.transitionDuration = '2s'; 
    b.style.transitionDuration = '3s';
    bb.style.transitionDuration = '0';
    c.style.transitionDuration = '2s';
    aa.style.width = '800px';
    aa.style.height = '300px';
    aa.style.backgroundColor = 'black';
    bb.style.top = '80px';
    bb.style.left = '230px';
    a.style.color = '#f0ee97';
    b.style.top = '30%';
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



	a.style.width = "70%";
	aa.style.color = "white";
	aaa.style.color = "black";
    aa.style.fontSize = "25px";
    aaa.style.top = "400px";

	b.style.width = "13.33%";
	bb.style.color = "white";
	bbb.style.color = "black";
    bb.style.fontSize = "3px";
    bbb.style.top = "400px";
    bbb.style.right = "50px";

	c.style.width = "13.33%"; 
	cc.style.color = "black";
	ccc.style.color = "white";
    cc.style.fontSize = "3px";
    ccc.style.top = "400px";
    ccc.style.right = "50px";

	
	
	a.style.transitionDuration = "2s";
	aa.style.transitionDuration = "1s";
	aaa.style.transitionDuration = "0s";

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
    aaa.style.top = "400px";
    aaa.style.right = "50px";

	b.style.width = "70%";
	bb.style.color = "black";
    bbb.style.color = "white";
    bb.style.fontSize = "25px";
    bbb.style.top = "350px";


	c.style.width = "13.33%";
	cc.style.color = "black";
	ccc.style.color = "white";
    cc.style.fontSize = "0px";
    ccc.style.top = "400px";
    ccc.style.right = "50px";



	
	a.style.transitionDuration = "2s";
	aa.style.transitionDuration = "0s";
	aaa.style.transitionDuration = "4.2s";
	
	b.style.transitionDuration = "2s";
	bb.style.transitionDuration = "1s";
    bbb.style.transitionDuration = "0s";
	

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
    aaa.style.top = "400px";
    aaa.style.right = "50px";

	b.style.width = "13.33%";
	bb.style.color = "white";
	bbb.style.color = "black";
    bb.style.fontSize = "3px";
    bbb.style.top = "400px";
    bbb.style.right = "50px";

	c.style.width = "70%";
	cc.style.color = "white";
	ccc.style.color = "black";
    cc.style.fontSize = "25px";
    ccc.style.top = "300px";


	
	a.style.transitionDuration = "3s";
	aa.style.transitionDuration = "0s";
	aaa.style.transitionDuration = "0s";

	b.style.transitionDuration = "3s";
	bb.style.transitionDuration = "0s";
    bbb.style.transitionDuration = "4.2s";

	c.style.transitionDuration = "2s";
	cc.style.transitionDuration = "1s";
    ccc.style.transitionDuration = "0s";



}

function arrive1() {
    let aa = document.getElementById("bando-a1")
    let bb = document.getElementById("bando-a2");
    let cc = document.getElementById("bando-a3");
    let dd = document.getElementById("bando-a4");
    let q = document.getElementById("bando");
    aa.style.backgroundColor = 'black';
    aa.style.color = "white";

    bb.style.backgroundColor = 'black';
    bb.style.color = "white";

    cc.style.backgroundColor = 'black';
    cc.style.color = "white";

    dd.style.backgroundColor = 'black';
    dd.style.color = "white";

    q.style.borderColor = "black";


    aa.style.transitionDuration = "1s";

    bb.style.transitionDuration = "0s";

    cc.style.transitionDuration = "0s";

    dd.style.transitionDuration = "0s";
}

function arrive2() {

    let aa = document.getElementById("bando-a1");

    let bb = document.getElementById("bando-a2");

    let cc = document.getElementById("bando-a3");

    let dd = document.getElementById("bando-a4");

    let q = document.getElementById("bando");

    aa.style.backgroundColor = 'black';
    aa.style.color = "white";

    bb.style.backgroundColor = 'white';
    bb.style.color = "black";

    cc.style.backgroundColor = 'black';
    cc.style.color = "white";

    dd.style.backgroundColor = 'black';
    dd.style.color = "white";

    q.style.borderColor = "black";


    aa.style.transitionDuration = "0s";

    bb.style.transitionDuration = "2s";

    cc.style.transitionDuration = "0s";

    q.style.transitionDuration = "0s";
}

function arrive3() {

    let aa = document.getElementById("bando-a1");

    let bb = document.getElementById("bando-a2");

    let cc = document.getElementById("bando-a3");

    let dd = document.getElementById("bando-a4");

    let q = document.getElementById("bando");

    aa.style.backgroundColor = 'black';
    aa.style.color = "white";

    bb.style.backgroundColor = 'black';
    bb.style.color = "white";

    cc.style.backgroundColor = 'white';
    cc.style.color = "black";

    dd.style.backgroundColor = 'black';
    dd.style.color = "white";

    q.style.borderColor = "white";


    aa.style.transitionDuration = "0";

    bb.style.transitionDuration = "0";

    cc.style.transitionDuration = "2s";

    dd.style.transitionDuration = "0";

    q.style.transitionDuration = "3s";
}

function arrive4() {

    let aa = document.getElementById("bando-a1");

    let bb = document.getElementById("bando-a2");

    let cc = document.getElementById("bando-a3");

    let dd = document.getElementById("bando-a4");

    let q = document.getElementById("bando");

    aa.style.backgroundColor = 'black';
    aa.style.color = "white";

    bb.style.backgroundColor = 'black';
    bb.style.color = "white";

    cc.style.backgroundColor = 'black';
    cc.style.color = "white";

    dd.style.backgroundColor = 'white';
    dd.style.color = "black";

    q.style.borderColor = "black";


    aa.style.transitionDuration = "0s";

    bb.style.transitionDuration = "0s";

    cc.style.transitionDuration = "0s";

    dd.style.transitionDuration = "2s";

    q.style.transitionDuration = "0s";
}