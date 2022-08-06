const trimData = ()=>{
    let str = "  aditya  ";
    return str.trim(); 
}
const changetoLowerCase = ()=>{
    let str = "aditya"; 
    return str.toLowerCase(); 
}

const changeToUpperCase = ()=>{
    let str = "aditya"; 
    return str.toUpperCase(); 
}

module.exports = {
    trimData: trimData,
    lowerCase: changetoLowerCase,
    upperCase: changeToUpperCase
}