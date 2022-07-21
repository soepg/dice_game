let user_number=document.getElementById("user_number");
let btn=document.getElementById("ok_btn");
let random_div=document.getElementById("random");
let your_number=document.getElementById("your_number");
btn.onclick=function () {
    let min = Math.ceil(1);
    let max = Math.floor(5);
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    switch (random){
        case 1:reset();
            document.getElementsByClassName("row center")[0].innerHTML="<div class=\"circle\"></div>";
            break;
        case 2:reset();
            document.getElementsByClassName("row")[0].innerHTML="<div class=\"circle\"></div>";
            document.getElementsByClassName("row last")[0].innerHTML="<div class=\"circle\"></div>";
            break;
        case 3:reset();
            document.getElementsByClassName("row")[0].innerHTML="<div class=\"circle\"></div>";
            document.getElementsByClassName("row center")[0].innerHTML="<div class=\"circle\"></div>";
            document.getElementsByClassName("row last")[0].innerHTML="<div class=\"circle\"></div>";
            break;
        case 4:reset();
            document.getElementsByClassName("row")[0].innerHTML="<div class=\"circle\"></div> <div class=\"circle\"></div>";
            document.getElementsByClassName("row last")[0].innerHTML="<div class=\"circle\"></div> <div class=\"circle\"></div>";
            break;
        case 5:reset();
            document.getElementsByClassName("row")[0].innerHTML="<div class=\"circle\"></div> <div class=\"circle\"></div>";
            document.getElementsByClassName("row center")[0].innerHTML="<div class=\"circle\"></div>";
            document.getElementsByClassName("row last")[0].innerHTML="<div class=\"circle\"></div> <div class=\"circle\"></div>";
            break;
    }
    let rightSideSelector="#your_number";
    switch (user_number.value*1){
        case 1:reset(rightSideSelector);
            document.querySelector(rightSideSelector+" .row.center").innerHTML="<div class=\"circle\"></div>";
            break;
        case 2:reset(rightSideSelector);
            document.querySelector(rightSideSelector+" .row").innerHTML="<div class=\"circle\"></div>";
            document.querySelector(rightSideSelector+" .row.last").innerHTML="<div class=\"circle\"></div>";
            break;
        case 3:reset(rightSideSelector);
            document.querySelector(rightSideSelector+" .row").innerHTML="<div class=\"circle\"></div>";
            document.querySelector(rightSideSelector+" .row.center").innerHTML="<div class=\"circle\"></div>";
            document.querySelector(rightSideSelector+" .row.last").innerHTML="<div class=\"circle\"></div>";
            break;
        case 4:reset(rightSideSelector);
            document.querySelector(rightSideSelector+" .row").innerHTML="<div class=\"circle\"></div> <div class=\"circle\"></div>";
            document.querySelector(rightSideSelector+" .row.last").innerHTML="<div class=\"circle\"></div> <div class=\"circle\"></div>";
            break;
        case 5:reset(rightSideSelector);
            document.querySelector(rightSideSelector+" .row").innerHTML="<div class=\"circle\"></div> <div class=\"circle\"></div>";
            document.querySelector(rightSideSelector+" .row.center").innerHTML="<div class=\"circle\"></div>";
            document.querySelector(rightSideSelector+" .row.last").innerHTML="<div class=\"circle\"></div> <div class=\"circle\"></div>";
            break;
    }
    if (user_number.value==random){
        alert("ПОБЕДА!!!");
    }
}
function reset(selector) {
    selector=selector||"#random";
    document.querySelectorAll(selector+" .row").forEach(function (element){
        element.innerHTML="";
    })
}