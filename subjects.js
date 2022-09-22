let hrv=new Predmet("Hrvatski jezik","Sanja Borko",0);
let mat=new Predmet("Matematika","Sanja Loparić",1);
let eng=new Predmet("Engleski jezik","Mateja Žerjav",2);
let pig=new Predmet("Politika i gospodarstvo","Danijela Bratuša-Sarić",3);
let tzk=new Predmet("Tjelesna i zdravstvena kultura","Damir Markuš",4);
let etika=new Predmet("Etika","Lucija Sanjković Horvat",5);
let fiz=new Predmet("Fizika","Anica Antolek Hrgar",6);
let kom=new Predmet("Tehničko i poslovno komuniciranje","Marko Ljubek",7);
let mreze=new Predmet("Konfiguriranje računalnih mreža","Mirko Jambrošić",8);
let sig=new Predmet("Sigurnost informacijskih sustava","Mirko Jambrošić",9);
let ugrad=new Predmet("Ugradbeni računalni sustavi","Martin Dodlek",10);
let web=new Predmet("Skriptni jezici i web programiranje","Krešimir Kočiš",11);
let prim=new Predmet("Primjenjena matematika","Jurica Keresteš",12);
let obj=new Predmet("Napredno i objektno programiranje","Mirko Jambrošić",13);
let mob=new Predmet("Programiranje mobilnih uređaja","Krešimir Kočiš",14);
let odabraniRazred={
    cetvrti:true,
    treci:false,
    drugi:false,
    prvi:false
}
if(odabraniRazred.cetvrti){
    hrv.generirajPredmet();    
    mat.generirajPredmet();
    eng.generirajPredmet();
    pig.generirajPredmet();
    tzk.generirajPredmet();
    etika.generirajPredmet();
    fiz.generirajPredmet();
    kom.generirajPredmet();
    mreze.generirajPredmet();
    sig.generirajPredmet();
    ugrad.generirajPredmet();
    web.generirajPredmet();
    prim.generirajPredmet();
    obj.generirajPredmet();
    mob.generirajPredmet();

}
if(odabraniRazred.treci){
    for(let i=0;i<sviPredmeti.length;i++){
        sviPredmeti[i].remove();
    }
}

let zavrsna=document.querySelector(".zavrsna-ocjena h4 span");
let zbroj=Math.round(hrv.prosjek_ocjena)+Math.round(mat.prosjek_ocjena)+Math.round(eng.prosjek_ocjena)+Math.round(pig.prosjek_ocjena)+Math.round(tzk.prosjek_ocjena)
+Math.round(etika.prosjek_ocjena)+Math.round(fiz.prosjek_ocjena)+Math.round(kom.prosjek_ocjena)+Math.round(mreze.prosjek_ocjena)+Math.round(sig.prosjek_ocjena)
+Math.round(ugrad.prosjek_ocjena)+Math.round(web.prosjek_ocjena)+Math.round(prim.prosjek_ocjena)+Math.round(obj.prosjek_ocjena)+Math.round(mob.prosjek_ocjena);

zavrsna.innerText="  "+(zbroj/15).toFixed(2);

let sviPredmeti=document.querySelectorAll(".a .predmet");
let details=document.querySelectorAll(".details");

details.forEach(e=>{
    e.style.display="none";
});
sviPredmeti.forEach(e=>{
    e.addEventListener("mouseover",()=>{
        details[Number(e.children[0].children[0].innerText)].style-="display:none";
        
    });
    e.addEventListener("mouseleave",()=>{
        details.forEach(e=>{
            e.style.display="none";
        });
    });
});

//let cetvrtiRT=[];
//cetvrtiRT.push(hrv,mat,eng,pig,tzk,etika,fiz,kom,mreze,sig,ugrad,web,prim,obj,mob);
let odabir=document.querySelector(".odabir");
let god=document.querySelector(".god");
let ponudene=document.querySelectorAll(".odabir ul li");
odabir.style.display="none";
god.addEventListener("click",()=>{
    odabir.style-="display:none";
    ponudene.forEach(e=>{
        e.addEventListener("click",()=>{
            if(e.firstChild.innerText==="X"){
                odabir.style="display:none;animation: fadeOut 0.2s;";
            }
            for(let i=0;i<odabraniRazred.length;i++){
                odabraniRazred[i]=false;
            }
            if(e.className==="cetvrti"){
                odabraniRazred.cetvrti=true;
            }
            else if(e.className==="treci"){
                odabraniRazred.treci=true;
            }
        });
    });
});
