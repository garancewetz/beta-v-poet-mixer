//sentences
class Sentences {
    constructor(subject, action, complement) {
        this.subject = subject;
        this.action = action;
        this.complement = complement;
        this.citation = document.querySelector('.citation');

    }
    getRandom = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
    }
    generateCitation = () => {
        //random
        this.randomSubject = this.getRandom(this.subject.length);
        this.randomAction = this.getRandom(this.action.length);
        this.randomComplement = this.getRandom(this.complement.length);
        // creation elt p
        this.newP = document.createElement('p');
        //phrase aléatoire
        this.textCitation = document.createTextNode(this.subject[this.randomSubject] + ' ' + this.action[this.randomAction] + ' ' + this.complement[this.randomComplement]);
        // phrase dans Elt blockquote
        this.newP.appendChild(this.textCitation)
        //blockquote dans elt citation
        this.citation.appendChild(this.newP)  
    }
   
};


