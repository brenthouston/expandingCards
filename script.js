var inFocus = document.querySelectorAll(".img")


function focus(e){
    e.currentTarget.setAttribute("style","width: auto")
   
}

inFocus.forEach(function(element){
    element.addEventListener('click', focus);
   
})