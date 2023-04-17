var count1 = 1;
var countElement = document.querySelector("#countm");

var count2 = 1;
var countElement2 = document.querySelector("#countn");

var count3= 2;
var countElement3 = document.querySelector("#countj")

function add1(){
    count1++;
    countElement.innerText= count1 + " Like(s)";
    console.log(count1);
}

function add2(){
    count2++;
    countElement2.innerText= count2 + " Like(s)";
    console.log(count2);
}

function add3(){
    count3++;
    countElement3.innerText= count3 + " Like(s)";
    console.log(count3);
}