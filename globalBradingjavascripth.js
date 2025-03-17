
document.querySelectorAll('.Topics-a-javacripth').forEach(a => {
    a.addEventListener("click", function(e) {
        let scrollInto = a.dataset.idToScroll
        e.preventDefault(); // Prevent instant jump so only the code after this works
        document.querySelector("#"+scrollInto).scrollIntoView({ behavior: "smooth" });// this is used fr scroling 
    });
})
function openContent(oneContentJavascripth){
    oneContentJavascripth.classList.toggle("visibleContent") 
}
document.querySelectorAll('.oneContentJavascripth').forEach(oneContentJavascripth => {
    oneContentJavascripth.addEventListener('click', () => {openContent(oneContentJavascripth)})
    
})
