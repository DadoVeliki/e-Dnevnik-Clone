let stavka=document.querySelector(".stavke");
let sticky=stavka.offsetTop;
window.onscroll=()=>{
    if(window.pageYOffset>=sticky){
        stavka.classList.add("sticky");
    }
    else{
        stavka.classList.remove("sticky");
    }
}

let stilStavke="color:#53a2eb;border-bottom:5px solid #53a2eb";
let stilIkona="color:#53a2eb;";

let listaStavke=document.querySelectorAll(".stavke ul li");
let final=document.querySelector(".zavrsna-ocjena");
let divPredmeti=document.querySelector(".a");

let polje=[];
polje.push(document.querySelector(".biljeske"),document.querySelector(".ispiti"),document.querySelector(".izostanci"),document.querySelector(".vladanja"),document.querySelector(".raspored"));
for(let i=0;i<polje.length;i++){
    polje[i].style.display="none";
}

listaStavke[0].style=stilStavke;
listaStavke[0].firstChild.style=stilIkona;
listaStavke.forEach(e=>{
    e.addEventListener("click",()=>{
        listaStavke.forEach(s=>{
            s.style-=stilStavke;
            s.firstChild.style-=stilIkona;
        });
        if(e.innerText==="Bilješke" || e.innerText==="Ispiti" || e.innerText==="Izostanci" || e.innerText==="Vladanja" || e.innerText==="Raspored"){
            final.style.display="none";
            divPredmeti.style.display="none";
        }
        if(e.innerText==="Ocjene" || e.innerText==="Ispiti" || e.innerText==="Izostanci" || e.innerText==="Vladanja" || e.innerText==="Raspored"){
            polje[0].style.display="none";
        }
        if(e.innerText==="Bilješke" || e.innerText==="Ocjene" || e.innerText==="Izostanci" || e.innerText==="Vladanja" || e.innerText==="Raspored"){
            polje[1].style.display="none";
        }
        if(e.innerText==="Bilješke" || e.innerText==="Ispiti" || e.innerText==="Ocjene" || e.innerText==="Vladanja" || e.innerText==="Raspored"){
            polje[2].style.display="none";
        }
        if(e.innerText==="Bilješke" || e.innerText==="Ispiti" || e.innerText==="Izostanci" || e.innerText==="Ocjene" || e.innerText==="Raspored"){
            polje[3].style.display="none";
        }
        if(e.innerText==="Bilješke" || e.innerText==="Ispiti" || e.innerText==="Izostanci" || e.innerText==="Vladanja" || e.innerText==="Ocjene"){
            polje[4].style.display="none";
        }
        switch(e.innerText){
            case "Ocjene":
                final.style-="display:none";
                divPredmeti.style-="display:none";
                navStil(e);
                break;
            case "Bilješke":
                polje[0].style-="display:none";
                navStil(e);
                break;
            case "Ispiti":
                polje[1].style-="display:none";
                navStil(e);
                break;
            case "Izostanci":
                polje[2].style-="display:none";
                navStil(e);
                break;
            case "Vladanja":
                polje[3].style-="display:none";
                navStil(e);
                break;
            case "Raspored":
                polje[4].style-="display:none";
                navStil(e);
                break;
        }
    });
});
navStil=e=>{
    e.style=stilStavke;
    e.firstChild.style=stilIkona;
}