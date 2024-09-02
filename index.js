import { city } from "./city.js";
import { popularchains } from "./popularchains.js";
import { popularcity } from "./popularcity.js"
import { popularrestaurant } from "./popularrestaurant.js";


let localitiesContainerE1=document.querySelector(".localities_container")

let htmllocalitiesList =city.map((e1)=>{
    return `
    <div class="localities_list">
        <div class="localities_card">
            <h3>${e1.name}</h3>
            <p>${e1.place}  places</p>
        </div>
        <i class="fa-solid fa-angle-right"></i>
    </div> 
    `
    
}).join("")
localitiesContainerE1.innerHTML=htmllocalitiesList



///popularcity
let popularcityHTML=document.getElementById("popularcityid")
let popularcityHTMLLINK="";
for(let i=0;i<popularcity.length;i++)
    {
        console.log(popularcity[i])
        popularcityHTMLLINK += `
        <a class="Popularcityname" href=${popularcity[i].link}>${popularcity[i].docs} </a>
        <span class="dot"> </span>
        `
    }
popularcityHTML.innerHTML= popularcityHTMLLINK;


let toggle =true;
document.getElementById("popularcitylistid").addEventListener("click",()=>{
    if(toggle)
        {
            popularcityHTML.style.display="block"
            toggle!=toggle
            toggle=false
        }
        else{
            popularcityHTML.style.display="none"
            toggle= true
        }
})





///popularrestaurant
let popularrestaurantHTML=document.getElementById("popularrestaurantid")
let popularrestaurantHTMLLINK="";
for(let i=0;i<popularrestaurant.length;i++)
    {
        console.log(popularrestaurant[i])
        popularrestaurantHTMLLINK += `
        <a class="Popularrestaurantname" href=${popularrestaurant[i].link}>${popularrestaurant[i].docs} </a>
        <span class="dot"> </span>
        `
    }
popularrestaurantHTML.innerHTML= popularrestaurantHTMLLINK;


let togg =true;
document.getElementById("popularrestaurantlistid").addEventListener("click",()=>{
    if(togg)
        {
            popularrestaurantHTML.style.display="block"
            togg!=togg
            togg=false
        }
        else{
            popularrestaurantHTML.style.display="none"
            togg= true
        }
})









