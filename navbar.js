let list=document.querySelectorAll(".left-navbar ul li");

list[0].style="background-color: rgb(51, 51, 51);";
list[0].firstChild.style="color: #2296da;text-shadow: 0 0 25px #0072ff, 0 0 50px #0072ff, 0 0 100px #0072ff,0 0 200px #0072ff;";
list.forEach(e => {
    e.addEventListener("click",()=>{
        for(let i=0;i<list.length;i++){
            list[i].firstChild.style="color:white";
            list[i].style="background:none";
        }
        if(e.className!=="tri-tocke"){
            e.style="background-color: rgb(51, 51, 51);";
            e.firstChild.style="color: #2296da;text-shadow: 0 0 25px #0072ff, 0 0 50px #0072ff, 0 0 100px #0072ff,0 0 200px #0072ff;transition:0.1s ease";
        }
        });
});

let rightArrow=document.querySelector(".zadnja-strelica");
let leftNavbar=document.querySelector(".left-navbar");
let mainWrapper=document.querySelector(".main-wrapper");
let icons=document.querySelector("i");
let logoText=document.querySelector(".left-navbar .dnevnik-logo .text");
let prosireno=false;
rightArrow.addEventListener("click",()=>{
    if(prosireno===false){
        rightArrow.firstChild.style="transform:rotate(180deg)";
        leftNavbar.style="transition:0.2s ease;width:17%;";
        mainWrapper.style="transition:0.2s ease;width:83%;margin-left:17%";

        for(let i=0;i<list.length;i++){
            list[i].style="padding-left:30px;height:12%;width:17vw;color: hsla(0,0%,100%,.8);justify-content:flex-start";
            
        }
        logoText.style="display:flex;flex-direction:column;justify-content:center;";
        logoText.innerHTML=`<h2 style="color: hsla(0,0%,100%,.8);">e-Dnevnik</h2><h5 style="padding-left:110px;margin-top:-15px;color:#2296da;text-shadow: 0 0 25px #0072ff, 0 0 50px #0072ff, 0 0 100px #0072ff,0 0 200px #0072ff;"><i>Plus</i></h5>`;
        list[0].innerHTML+=`<span style="padding-left:15px;">Razred</span>`;
        list[1].innerHTML+=`<span style="padding-left:15px">Kalendar</span>`;
        list[2].innerHTML+=`<span style="padding-left:15px">Statistika ocjena</span>`;
        list[3].innerHTML+=`<span style="padding-left:15px">Kalkulator bodova</span>`;


        list[5].innerHTML+=`<span style="padding-left:15px">Školska stranica</span>`;
        list[6].innerHTML+=`<span style="padding-left:15px">Školski e-Rudnik</span>`;
        list[7].innerHTML+=`<span style="padding-left:15px">Srednja.hr</span>`;

        list[8].innerHTML+=`<span style="padding-left:15px">Postavke</span>`;
        list[9].innerHTML+=`<span style="padding-left:15px">O aplikaciji</span>`;

        prosireno=true;
    }
    else{
        rightArrow.firstChild.style="transform:rotate(-180deg)";
        leftNavbar.style="transition:0.2s ease;width:5%;";
        mainWrapper.style="transition:0.2s ease;width:95%;margin-left:5%";

        for(let i=0;i<list.length;i++){
            list[i].style="height:15%;width:5vw;color: hsla(0,0%,100%,.8);";
            
        }
        logoText.innerHTML="";
        list[0].innerHTML=`<i class="fa-solid fa-graduation-cap"></i>`;
        list[1].innerHTML=`<i class="fa-regular fa-calendar"></i>`;
        list[2].innerHTML=`<i class="fa-solid fa-chart-simple"></i>`;
        list[3].innerHTML=`<i class="fa-solid fa-calculator"></i>`;

        list[4].innerHTML=`<i class="fa-solid fa-ellipsis"></i>`;
        list[5].innerHTML=`<i class="fa-solid fa-house"></i></i>`;
        list[6].innerHTML=`<i class="fa-solid fa-circle"></i></i>`;
        list[7].innerHTML=`<i class="fa-solid fa-fire"></i>`;

        list[8].innerHTML=`<i class="fa-solid fa-gear"></i>`;
        list[9].innerHTML=`<i class="fa-regular fa-circle-question"></i>`;
        list[10].innerHTML=`<i style="transform: scale(2);" class="fa-solid fa-chevron-right"></i>`;
        prosireno=false;
    }
});