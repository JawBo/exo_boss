export class Archer {
    constructor(nom,pdv,pa,nf){
        this.nom = nom,
        this.point_vie = pdv,
        this.point_attaque = pa,
        this.nomb_fleche = nf 
    }
    defense(){
        this.pa = this.pa * 0.5
        this.pdv = this.pdv * 2.5 
    }

    attaque(){
        this.pa = this.pa * 1.4 
        this.pdv = this.pdv * 0.75
    }
}