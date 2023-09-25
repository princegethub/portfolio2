// ========================toogle style switcher==========================

const switchToogler = document.querySelector(".style-switcher-toogler");
const switch1 = document.querySelector(".style-switcher");
switchToogler.addEventListener("click" ,()=>{
   
    if (switch1.style.right = "-200px") {
        switch1.style.right = "11px"
    }
   
})
switch1.addEventListener("mouseleave" ,()=>{
 
    if (switch1.style.right = "11px") {
        switch1.style.right = "-200px"
    }
   
})


// ========================hide style switch on scroll==========================
window.addEventListener("scroll",()=>
{
    if (    document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
        
    }
})
// ========================theme color==========================
const alternativeStyle = document.querySelectorAll(".alternative-style");
function setActiveStyle(color){
    alternativeStyle.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled")
        }
        else{
            style.setAttribute("disabled", "ture")

        }
    });
}
// ========================theme light and dark mode==========================
const dayNight= document.querySelector(".day-night");
dayNight.addEventListener("click", ()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");

})
window.addEventListener("load", ()=>
{
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else{
        dayNight.querySelector("i").classList.add("fa-moon");

    }
})
console.log("hello wrold");