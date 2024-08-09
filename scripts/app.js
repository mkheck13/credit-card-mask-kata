// Usually when you buy something, you're asked whether your credit card number, 
// phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, 
// you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples (input --> output):
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!" --> "####################################man!"

// need a statement that shows the last 4 chars of the string, could do a substring for that
// need a statement that will mask the rest of the string
// do a for loop to iterate thru the string to get the length minus the last for letters
// for every char in the string make them # instead
// return the two statements
function maskify(cc){
    let hideNum = '';
    let showNum = cc.substring(cc.length - 4, cc.length);
    
    for(let i = 0; i < cc.length - 4; i++){
        hideNum += '#';
    }
    return hideNum + showNum;
}

// see some that use slice and replace to get the same output
function maskify(cc){
    return cc.slice(0,-4).replace(/./g,'#') + cc.slice(-4);
}