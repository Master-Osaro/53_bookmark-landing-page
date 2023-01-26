const checkEmailInput=(email)=>{
    const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    console.log(email);
    if (email.length === 0 || (emailValidation.test(email))===false || !email) {
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


