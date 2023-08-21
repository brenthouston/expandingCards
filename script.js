

const header = document.querySelector('header')

const title =`
<div>
<h1>Painting Portfolio</h1>
</div>
<h4>Original art by Brent Houston</h4>
<p>Raised by back-to-landers in rural Arkansas. Brent Houston is a painter and printmaker working on Vashon Island in the Pacific Northwest of America.</p>
</div>
`
header.innerHTML= title;



// Main HTML
// images
const imgArray = [
"../images/bananna.jpg",
"../images/tress.jpg",
"../images/tress.jpg",
"../images/beauty_web.jpg",
"../images/trailer.jpg",
"../images/Air_Taxi copy.jpg",
"../images/BIGFOOT.jpg",
"../images/Blowup_raw.jpg", 
"../images/brisket18X24_sml.jpg",
"../images/church_web.jpg",
"../images/dashboard copy.jpg",
"../images/dashboard-copy.jpg",
"../images/EastPassage.jpg"]

const content =
imgArray.map(function (item){
    item = `
    <img src="${item}" style="hieght:350px; width:350px" alt="painting by brent houston"></img>
    `
    return item;
    
})

    // const banImg = new IMG("350px", "350px", "../images/bananna.jpg");
    // const treesImg = new IMG("350px", "350px", "../images/tress.jpg");
    // const me = new IMG("350px", "350px", "../images/me.jpg");
    // const beauty = new IMG("350px", "350px", "../images/beauty_web.jpg");
    // const trailer = new IMG("350px", "350px", "../images/trailer.jpg");
    // const taxi = new IMG("350px", "350px", "../images/Air_Taxi copy.jpg");
    // const bigFoot = new IMG("350px", "350px", "../images/BIGFOOT.jpg");
    // const Blow = new IMG("350px", "350px", "../images/Blowup_raw.jpg");
    // const brisket = new IMG("350px", "350px", "../images/brisket18X24_sml.jpg");
    // const church = new IMG("350px", "350px", "../images/church_web.jpg");
    // const dashboard = new IMG("350px", "350px", "../images/dashboard copy.jpg");
    // const dash2 = new IMG("350px", "350px", "../images/dashboard-copy.jpg");
    // const eastPassage = new IMG("350px", "350px", "../images/EastPassage.jpg");
    
    
    
    
    const main = document.querySelector("main");
    
 
    
    main.innerHTML = content;
    
    
    