let user_number=document.getElementById("user_number");
let btn=document.getElementById("ok_btn");
let random_div=document.getElementById("random");
let your_number=document.getElementById("your_number")
btn.onclick=function () {
    let random=Math.trunc(Math.floor(Math.random() * (5 - 1 + 1)) + 1);
    your_number.innerHTML=user_number.value;
    random_div.innerHTML=random;
    console.log(random);
    if (user_number.value==random){
        alert("ПОБЕДА!!!");
    }
    user_number.value="";
}
