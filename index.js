// code your solution here
function saturdayFun(name ='roller-skate') {
    return `This Saturday, I want to ${name}!`;
}
saturdayFun();
function mondayWork(workType ="go to the office") {
    return `This Monday, I will ${workType}.`
}
function wrapAdjective(par = "*") {
    return function(name = "special"){
        return `You are ${par}${name}${par}!`
    }
}