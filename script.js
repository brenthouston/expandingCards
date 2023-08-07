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


// Header HTML

const header = document.querySelector('header')

const title =`
<div>
<h1>Painting Portfolio</h1>
</div>
`
header.innerHTML= title;



// Main HTML

const banImg = new IMG("350px", "350px", "../images/bananna.jpg");
const treesImg = new IMG("350px", "350px", "../images/tress.jpg");

const main = document.querySelector("main");

const content = `
    <div>
    <img src="${banImg.image}" style="height: ${banImg.height}; width: ${banImg.width};"></img>
    <img src="${treesImg.image}" style="height: ${treesImg.height}; width: ${treesImg.width};"></img>
    </div>`;

main.innerHTML = content;


