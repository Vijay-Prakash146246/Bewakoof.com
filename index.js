
document.querySelector(".midleft").addEventListener("click",frwdToMen);
function frwdToMen(){
    window.location.href="men.html"  // change link as per their need...
}
document.querySelector(".midright").addEventListener("click",frwdToWomen);

function frwdToWomen(){
    window.location.href="Women.html" //// change link as per their need...
}

document.querySelector("#searchIcon").addEventListener("click",formd);
function formd(){
    //console.log("inside")
    //write remaining function as per their need..
    console.log(document.querySelector("#search").value)
     
}

document.querySelector('toMenPage').addEventListener('click',goToMen)