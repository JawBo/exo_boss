export class Guerrier {
    constructor(nom,pdv,pa,pr){
        this.nom = nom,
        this.pdv = pdv,
        this.pa= pa,
        this.pr = pr 
    }

    defense(){
        this.pa = this.pa * 0.5
        this.pdv = this.pdv * 2.5 
    }

    attaque(){
        this.pa = this.pa * 1.4 
        this.pdv = this.pdv * 0.75
    }

    nTour(){
        if (this.pr < 4) {
            this.pr += 1
        }
        else {
            this.pr = 0
            this.pa = this.pa *1.25        
        }
    }
}
