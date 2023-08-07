import IMG from "./Components/IMG.js";

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
// images
const banImg = new IMG("350px", "350px", "../images/bananna.jpg");
const treesImg = new IMG("350px", "350px", "../images/tress.jpg");
const me = new IMG("350px", "350px", "../images/me.jpg");
const beauty = new IMG("350px", "350px", "../images/beauty_web.jpg");
const trailer = new IMG("350px", "350px", "../images/trailer.jpg");
const taxi = new IMG("350px", "350px", "../images/Air_Taxi copy.jpg");
const bigFoot = new IMG("350px", "350px", "../images/BIGFOOT.jpg");
const Blow = new IMG("350px", "350px", "../images/Blowup_raw.jpg");
const brisket = new IMG("350px", "350px", "../images/brisket18X24_sml.jpg");
const church = new IMG("350px", "350px", "../images/church_web.jpg");
const dashboard = new IMG("350px", "350px", "../images/dashboard copy.jpg");
const dash2 = new IMG("350px", "350px", "../images/dashboard-copy.jpg");
const eastPassage = new IMG("350px", "350px", "../images/EastPassage.jpg");




const main = document.querySelector("main");

const content = `
    <div>
    <img alt="bananna"src="${banImg.image}" style="height: ${banImg.height}; width: ${banImg.width};"></img>
    <img alt="trees"src="${treesImg.image}" style="height: ${treesImg.height}; width: ${treesImg.width};"></img>
    <img alt="trailer"src="${trailer.image}" style="height: ${trailer.height}; width: ${trailer.width};"></img>
    <img alt="portrait"src="${me.image}" style="height: ${me.height}; width: ${me.width};"></img>
    <img alt="airpland"src="${taxi.image}" style="height: ${taxi.height}; width: ${taxi.width};"></img>
    <img alt="flower"src="${beauty.image}" style="height: ${beauty.height}; width: ${beauty.width};"></img>
    <img alt="truck"src="${bigFoot.image}" style="height: ${bigFoot.height}; width: ${bigFoot.width};"></img>
    <img alt="inflatable santa"src="${Blow.image}" style="height: ${Blow.height}; width: ${Blow.width};"></img>
    <img alt="side of highway"src="${brisket.image}" style="height: ${brisket.height}; width: ${brisket.width};"></img>
    <img alt="church"src="${church.image}" style="height: ${church.height}; width: ${church.width};"></img>
    <img alt="highway scene"src="${dashboard.image}" style="height: ${dashboard.height}; width: ${dashboard.width};"></img>
    <img alt="highway scene"src="${dash2.image}" style="height: ${dash2.height}; width: ${dash2.width};"></img>
    <img alt="seascape"src="${eastPassage.image}" style="height: ${eastPassage.height}; width: ${eastPassage.width};"></img>
    </div>`;

main.innerHTML = content;


