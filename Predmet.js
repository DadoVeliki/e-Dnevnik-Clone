class Predmet{
    constructor(naziv,profesor,id){
        this.naziv=naziv;
        this.profesor=profesor;
        this.id=id;
    }
    broj_ocjena=Math.floor(Math.random()*15)+1;
    prosjek_ocjena=1;
    sve_ocjene=[];

    generirajPredmet(){
        let zbroj=0;
        for(let i=0;i<this.broj_ocjena;i++){
            this.sve_ocjene[i]=Math.floor(Math.random()*5)+1;
            zbroj+=this.sve_ocjene[i];    
        }
        this.prosjek_ocjena=zbroj/this.broj_ocjena;

        document.querySelector(".main-wrapper .a").innerHTML+=`<div class="predmet">
                        <div class="levo">
                            <id style="display:none">${this.id}</id>
                            <h5 class="naziv">${this.naziv}</h5>
                            <h5 class="prof">${this.profesor}</h5>
                        </div>

                        <div class="desno">
                            <h5 class="br">${this.broj_ocjena}</h5>
                            <h5 class="prosjek">${this.prosjek_ocjena.toFixed(2)}</h5>
                        </div>
                    </div>
                    <div class="details">
                        <table>
                            <tr><th style="border-top-left-radius:10px;"> </th><th>IX</th><th>X</th><th>XI</th><th>XII</th><th>I</th><th>II</th><th>III</th><th>IV</th><th>V</th><th style="border-top-right-radius:10px;">VI</th></tr>
                            <tr><th>Usvojenost</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                            <tr><th>Primjena</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                            <tr><th style="border-bottom-left-radius:10px;">Aktivnost</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td style="border-bottom-right-radius:10px;"></td></tr>
                        </table>
                    </div>
                    `;

                    let details=document.querySelectorAll(".details");
                    let duljina=this.sve_ocjene.length;
                    let ocjene=0;
                    for(let i=1;i<=3;i++){
                        for(let j=1;j<=10;j++){
                            details[this.id].children[0].children[0].children[i].children[j].innerText=this.sve_ocjene[ocjene];
                            if(ocjene<duljina){
                                ocjene++;
                            }
                            else{
                                details[this.id].children[0].children[0].children[i].children[j].innerText="";
                            }
                        }
                    }
    }
    
}