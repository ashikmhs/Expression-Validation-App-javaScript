let email = document.querySelector("#email");
let phoneNumber = document.querySelector("#phone-number");
let postCode = document.querySelector("#post-code");


email.addEventListener("click", emailFunc);
phoneNumber.addEventListener("click", phoneFunc);
postCode.addEventListener("click", postFunc);

function emailFunc(e){
    console.log("email");
    let a = prompt();
    let re = /^([a-zA-Z0-9]\.?)+[^\.]@([a-zA-Z0-9]\.?)+[^\.]$/;
    console.log(re.test(a));
    if(re.test(a)){
        alert("Your Email is Validated");
    }else{
        alert("Your Email is not Validated");
    }
}

function phoneFunc(e){
    console.log("phone");
    let a = prompt();
    let re = /^(\+)?(88)?01[0-9]{9}$/;
    console.log(re.test(a));
    if(re.test(a)){
        alert("Your Phone Number is Validated");
    }else{
        alert("Your Phone Number is not Validated");
    }
}

function postFunc(e){
    console.log("post");
    let a = prompt();
    let re = /^[0-9]{4}$/;
    console.log(re.test(a));
    if(re.test(a)){
        alert("Your Post Code is Validated");
    }else{
        alert("Your Post Code is not Validated");
    }
}