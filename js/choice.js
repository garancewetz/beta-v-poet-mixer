class Choice {
    constructor(generate1, generate2) {
    this.generate1 = generate1;
    this.generate2 = generate2;
    this.hernandez = document.getElementById('hernandez');
    this.artaud = document.getElementById('artaud')
    this.generate = document.querySelector('.generate');
    this.citation = document.querySelector('.citation');
    this.textCitation = '';
    this.btnQuantity = document.getElementsByClassName('btn-choice');
    this.valeur = 1;
    this.event();
    }
    removeCitation = () => {
        //console.log(this.citation)
        while (this.citation.firstChild) {
            this.citation.removeChild(this.citation.firstChild);    
        }        
    }
    removeActive = () => {
        for (let i = 0; i < this.btnQuantity.length; i++) {
            this.btnQuantity[i].classList.remove("active")
        }
    }
    event = () => {
        //choix du nombre de citation
        for (let i = 0; i < this.btnQuantity.length; i++) {
            this.btnQuantity[i].addEventListener("click", () => {
                this.removeActive();
                this.btnQuantity[i].classList.toggle("active")
                this.valeur = parseInt(this.btnQuantity[i].innerText)
                console.log(this.valeur);
            });
        }
        //choix type citation
        let choiceType = true;
        this.artaud.addEventListener("click", () => {
            this.artaud.classList.toggle('red')
            this.hernandez.classList.remove('red')
            choiceType = true;
        });
        this.hernandez.addEventListener("click", () => {
            this.hernandez.classList.toggle('red')
            this.artaud.classList.remove('red')
            choiceType = false;
            });
        this.generate.addEventListener("click", () => {
            if(this.citation.hasChildNodes()){
                this.removeCitation()
            }
            //génère citation selon nbre demandé
            for (let i = 0; i < this.valeur; i++) {
                if (choiceType){
                    this.generate1.generateCitation();
                } else {
                    this.generate2.generateCitation();
                }
            }
        });
    }  
}


