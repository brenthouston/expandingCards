import IMG from "./IMG.js";

// var inFocus = document.querySelectorAll(".img");

// function focus(e){
//     if (e.currentTarget.value === "false"){
//         e.currentTarget.setAttribute("style","width: auto")
//         e.currentTarget.setAttribute("value", "true")

//     }else{
//         e.currentTarget.setAttribute("style","width: 100px")
//         e.currentTarget.setAttribute("value", "false")
//     }

// }

// inFocus.forEach(function(element){

//     element.addEventListener('click', focus);
// })

//Picture objects

// function bannana(){
//     var bananna = document.createElement("img")
//     bananna.setAttribute("src", "images/bananna.jpg")
//     bananna.setAttribute("width", "400")
//     bananna.setAttribute("height", "400")
//     bananna.setAttribute("alt", "Bananna")
//     document.body.appendChild(bananna)

// }

const banImg = new IMG("400px", "400px", "../images/bananna.jpg");

const main = document.querySelector("main");

const content = `
    <div>
    <img src="${banImg.image}"></img>
    </div>`;

main.innerHTML = content;
