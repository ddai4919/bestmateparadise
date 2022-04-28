
//Hamburger menu
document.getElementById("hamburger1").addEventListener("click", function(){
    document.getElementById("mobile-nav1").classList.remove("hidden");
})
document.getElementById("close1").addEventListener("click", function(){
    document.getElementById("mobile-nav1").classList.add("hidden");
})