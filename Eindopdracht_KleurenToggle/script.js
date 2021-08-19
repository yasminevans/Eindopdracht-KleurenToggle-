
function myFunction() {
    var x = document.getElementById("menu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


const menu = document.querySelector('.menu');
const lila = document.querySelector("#lila");
const blauw = document.querySelector("#blauw");
const perzik = document.querySelector("#perzik");
const geel = document.querySelector("#geel");
const roze = document.querySelector("#roze");
const pinkBackground = document.querySelector(".pink-background");
const lilabackground = document.querySelector(".lila-background");
const blauwbackground = document.querySelector(".blauw-background");
const perzikbackground = document.querySelector(".perzik-background");
const geelbackground = document.querySelector(".geel-background");

const changeBackgroundRoze = () => {
    pinkBackground.classList.remove("blauw-background");
    pinkBackground.classList.remove("geel-background");
    pinkBackground.classList.remove("perzik-background");
    pinkBackground.classList.remove("lila-background");
    pinkBackground.classList.add("pink-background");
    document.getElementById("text").innerHTML = "Dit is een mooie roze kleur";

};

roze.addEventListener('click', changeBackgroundRoze);

const changeBackgroundLila = () => {
    pinkBackground.classList.remove("blauw-background");
    pinkBackground.classList.remove("geel-background");
    pinkBackground.classList.remove("perzik-background");
    pinkBackground.classList.remove("pink-background");
    pinkBackground.classList.add("lila-background");
    document.getElementById("text").innerHTML = "Dit is een mooie lila kleur";

};

lila.addEventListener('click', changeBackgroundLila);


const changeBackgroundBlauw = () => {
    pinkBackground.classList.remove("lila-background");
    pinkBackground.classList.remove("geel-background");
    pinkBackground.classList.remove("perzik-background");
    pinkBackground.classList.remove("pink-background");
    pinkBackground.classList.add("blauw-background");
    document.getElementById("text").innerHTML = "Dit is een mooie blauwe kleur";
};

blauw.addEventListener('click', changeBackgroundBlauw);

const changeBackgroundPerzik = () => {
    pinkBackground.classList.remove("lila-background");
    pinkBackground.classList.remove("geel-background");
    pinkBackground.classList.remove("blauw-background");
    pinkBackground.classList.remove("pink-background");
    pinkBackground.classList.add("perzik-background");
    document.getElementById("text").innerHTML = "Dit is een mooie perzik kleur";
};

perzik.addEventListener('click', changeBackgroundPerzik);

const changeBackgroundGeel = () => {
    pinkBackground.classList.remove("lila-background");
    pinkBackground.classList.remove("blauw-background");
    pinkBackground.classList.remove("perzik-background");
    pinkBackground.classList.remove("pink-background");
    pinkBackground.classList.add("geel-background");
    document.getElementById("text").innerHTML = "Dit is een mooie gele kleur";
};

geel.addEventListener('click', changeBackgroundGeel);
