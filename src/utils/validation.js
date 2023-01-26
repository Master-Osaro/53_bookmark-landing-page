let errorNameMsg =""
let errorEmailMsg =""
let errorPhoneMsg =""
let errorPlanMsg =""
let nameInput = ""
let emailInput = ""
let phoneInput = ""

const step1ValidationTimeout = () => setInterval(() => {
    errorNameMsg.innerHTML = "";
    errorEmailMsg.innerHTML = "";
    errorPhoneMsg.innerHTML = "";
}, 5500);



const checkEmailInput=(email)=>{
    const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    console.log(email);
    if (email.length === 0 || (emailValidation.test(email))===false || !email) {
        // errorEmailMsg.innerHTML = "Enter valid Email";
        // emailInput.classList.add('error_border')
        return  false;
    } 
    
    else {
        return true
    }
}
const checkEmailInputBK=(email)=>{
    emailInput = document.querySelector("#email");
    errorEmailMsg = document.querySelector(".error_input__email");
    const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.length === 0 || (emailValidation.test(email))===false) {
        errorEmailMsg.innerHTML = "Enter valid Email";
        emailInput.classList.add('error_border')
        return  false;
    } 
    
    else {
        return true
    }
}

export const isValid = (emailAddress)=>{
    if(!checkEmailInput(emailAddress)){
        return false
    } else {
        return true
    }
}


