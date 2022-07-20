let user_number=document.getElementById("user_number");
let btn=document.getElementById("ok_btn");
let random_div=document.getElementById("random");
let your_number=document.getElementById("your_number");
btn.onclick=function () {
    let min = Math.ceil(1);
    let max = Math.floor(5);
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(random);
    switch (random){
        case 1:document.getElementsByClassName("row center")[0].innerHTML="<div class=\"circle\"></div>";
            break;
        case 2:document.getElementsByClassName("row")[0].innerHTML="<div class=\"circle\"></div>";
            document.getElementsByClassName("row last")[0].innerHTML="<div class=\"circle\"></div>";
    }
}