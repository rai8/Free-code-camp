function telePhoneCheck(str){
const re= /^(1 |1)*(\d{3}|\(\d{3}\))[ -]{0,1}(\d{3})[ -]{0,1}(\d{4}$)/g;

    return re.test(str)
}

console.log(telePhoneCheck("555-555-5555"))